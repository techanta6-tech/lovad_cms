import { randomUUID } from 'crypto';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client/cms_webserver';
import { CmsPrismaService } from '../prisma/cms-prisma.service';
import { LcmsPrismaService } from '../prisma/lcms-prisma.service';

export interface MeetingGroup {
  id: string;
  name: string;
}

export interface MeetingWithGroups {
  id: string;
  title: string;
  location_id: string;
  group_ids: string[];
  groups: MeetingGroup[];
  time_start: string;
  time_end: string;
  date_organize: Date;
  time_before_begin: number;
  time_after_end: number;
}

export interface CreateMeetingDto {
  title: string;
  location_id: string;
  group_ids: string[];
  time_start: string;
  time_end: string;
  date_organize: string;
  time_before_begin?: number;
  time_after_end?: number;
}

export interface UpdateMeetingDto {
  title?: string;
  location_id?: string;
  group_ids?: string[];
  time_start?: string;
  time_end?: string;
  date_organize?: string;
  time_before_begin?: number;
  time_after_end?: number;
}

// Prisma error code for "record to update/delete does not exist".
const PRISMA_NOT_FOUND = 'P2025';

const TIME_HHMM_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;

@Injectable()
export class MeetingService {
  constructor(
    private readonly cms: CmsPrismaService,
    // group_ids tham chiếu tới bảng human_list, nằm ở DB lcms.
    private readonly lcms: LcmsPrismaService,
  ) {}

  private validate(dto: CreateMeetingDto | UpdateMeetingDto, isCreate: boolean) {
    if (isCreate || dto.title !== undefined) {
      if (!dto.title?.trim()) {
        throw new BadRequestException('title không được để trống');
      }
    }
    if (isCreate || dto.location_id !== undefined) {
      if (!dto.location_id?.trim()) {
        throw new BadRequestException('location_id không được để trống');
      }
    }
    if (isCreate || dto.group_ids !== undefined) {
      if (!Array.isArray(dto.group_ids) || dto.group_ids.length === 0) {
        throw new BadRequestException('group_ids không được để trống');
      }
    }
    if (isCreate || dto.time_start !== undefined) {
      if (!dto.time_start || !TIME_HHMM_REGEX.test(dto.time_start)) {
        throw new BadRequestException('time_start phải có định dạng "HH:mm"');
      }
    }
    if (isCreate || dto.time_end !== undefined) {
      if (!dto.time_end || !TIME_HHMM_REGEX.test(dto.time_end)) {
        throw new BadRequestException('time_end phải có định dạng "HH:mm"');
      }
    }
    if (isCreate || dto.date_organize !== undefined) {
      if (!dto.date_organize || Number.isNaN(new Date(dto.date_organize).getTime())) {
        throw new BadRequestException('date_organize không hợp lệ');
      }
    }
    if (dto.time_before_begin !== undefined && dto.time_before_begin < 0) {
      throw new BadRequestException('time_before_begin không được âm');
    }
    if (dto.time_after_end !== undefined && dto.time_after_end < 0) {
      throw new BadRequestException('time_after_end không được âm');
    }
  }

  // Resolve group_ids (ids of human_list rows, stored in the lcms DB) to
  // { id, name } pairs so the UI can display group names without a second
  // round-trip. Falls back to using the raw id as the name if not found.
  private async resolveGroups(groupIds: string[]): Promise<MeetingGroup[]> {
    if (groupIds.length === 0) return [];

    const lists = await this.lcms.human_list.findMany({
      where: { id: { in: groupIds } },
      select: { id: true, name: true },
    });
    const nameById = new Map(lists.map(l => [l.id, l.name]));

    return groupIds.map(id => ({ id, name: nameById.get(id) || id }));
  }

  private async toMeetingWithGroups(row: {
    id: string;
    title: string;
    location_id: string;
    group_ids: string[];
    time_start: string;
    time_end: string;
    date_organize: Date;
    time_before_begin: number;
    time_after_end: number;
  }): Promise<MeetingWithGroups> {
    const groups = await this.resolveGroups(row.group_ids);
    return {
      id: row.id,
      title: row.title,
      location_id: row.location_id,
      group_ids: row.group_ids,
      groups,
      time_start: row.time_start,
      time_end: row.time_end,
      date_organize: row.date_organize,
      time_before_begin: row.time_before_begin,
      time_after_end: row.time_after_end,
    };
  }

  async findAll(): Promise<MeetingWithGroups[]> {
    const meetings = await this.cms.meeting.findMany({
      orderBy: { time_created: 'asc' },
    });
    return Promise.all(meetings.map(m => this.toMeetingWithGroups(m)));
  }

  async findOne(id: string): Promise<MeetingWithGroups | null> {
    const meeting = await this.cms.meeting.findUnique({ where: { id } });
    if (!meeting) return null;
    return this.toMeetingWithGroups(meeting);
  }

  async create(dto: CreateMeetingDto): Promise<MeetingWithGroups> {
    this.validate(dto, true);

    const location = await this.cms.location.findUnique({ where: { id: dto.location_id } });
    if (!location) {
      throw new BadRequestException(`Không tìm thấy location id "${dto.location_id}"`);
    }

    const meeting = await this.cms.meeting.create({
      data: {
        id: randomUUID(),
        title: dto.title.trim(),
        location_id: dto.location_id,
        group_ids: dto.group_ids,
        time_start: dto.time_start,
        time_end: dto.time_end,
        date_organize: new Date(dto.date_organize),
        time_before_begin: dto.time_before_begin ?? 30,
        time_after_end: dto.time_after_end ?? 30,
      },
    });

    return this.toMeetingWithGroups(meeting);
  }

  async update(id: string, dto: UpdateMeetingDto): Promise<MeetingWithGroups> {
    this.validate(dto, false);

    if (dto.location_id !== undefined) {
      const location = await this.cms.location.findUnique({ where: { id: dto.location_id } });
      if (!location) {
        throw new BadRequestException(`Không tìm thấy location id "${dto.location_id}"`);
      }
    }

    try {
      const meeting = await this.cms.meeting.update({
        where: { id },
        data: {
          ...(dto.title !== undefined ? { title: dto.title.trim() } : {}),
          ...(dto.location_id !== undefined ? { location_id: dto.location_id } : {}),
          ...(dto.group_ids !== undefined ? { group_ids: dto.group_ids } : {}),
          ...(dto.time_start !== undefined ? { time_start: dto.time_start } : {}),
          ...(dto.time_end !== undefined ? { time_end: dto.time_end } : {}),
          ...(dto.date_organize !== undefined ? { date_organize: new Date(dto.date_organize) } : {}),
          ...(dto.time_before_begin !== undefined ? { time_before_begin: dto.time_before_begin } : {}),
          ...(dto.time_after_end !== undefined ? { time_after_end: dto.time_after_end } : {}),
        },
      });

      return this.toMeetingWithGroups(meeting);
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === PRISMA_NOT_FOUND) {
        throw new NotFoundException(`Không tìm thấy meeting id "${id}"`);
      }
      throw e;
    }
  }

  async remove(id: string): Promise<{ id: string }> {
    try {
      await this.cms.meeting.delete({ where: { id } });
      return { id };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === PRISMA_NOT_FOUND) {
        throw new NotFoundException(`Không tìm thấy meeting id "${id}"`);
      }
      throw e;
    }
  }

  async getAttendanceReport(meetingId: string) {
    const meeting = await this.cms.meeting.findUnique({ where: { id: meetingId } });
    if (!meeting) {
      throw new NotFoundException(`Không tìm thấy meeting id "${meetingId}"`);
    }

    // 1. Fetch location camera binds
    const binds = await this.cms.location_camera_bind.findMany({
      where: { location_id: meeting.location_id },
    });

    const checkinCameraIds = binds
      .filter(b => b.role.includes('checkin') || b.role.length === 0)
      .map(b => b.camera_id);
    const checkoutCameraIds = binds
      .filter(b => b.role.includes('checkout') || b.role.length === 0)
      .map(b => b.camera_id);

    // If no cameras at all, we can't query logs
    if (binds.length === 0) {
      return {
        checkinEvents: [],
        checkoutEvents: [],
      };
    }

    // 2. Calculate time range
    const getOffsetDateTime = (date: Date, timeStr: string, offsetMinutes: number): Date => {
      const [h, m] = timeStr.split(':').map(Number);
      const res = new Date(date);
      res.setHours(h, m, 0, 0);
      res.setMinutes(res.getMinutes() + offsetMinutes);
      // Convert VN local time (UTC+7) → UTC by subtracting 7 hours
      res.setMinutes(res.getMinutes() - 420);
      return res;
    };

    const startTime = getOffsetDateTime(meeting.date_organize, meeting.time_start, -meeting.time_before_begin);
    const endTime = getOffsetDateTime(meeting.date_organize, meeting.time_end, meeting.time_after_end);

    // 3. Execute queries
    const query = `
      SELECT 
          es.object_id,
          ev.create_time AS time_created,
          h.full_name,
          h.cropped_face_images,
          ca.camera_friendly_name AS camera_name,
          ca.area_name
      FROM event_vms_parent ev
      INNER JOIN event_statistic_parent es 
          ON ev.source_id = es.id
      INNER JOIN human_info h 
          ON es.object_id = h.id
      LEFT JOIN camera_area_event_source ca 
          ON es.source_id = ca.area_id
      WHERE 
          ev.create_time >= $1 
          AND ev.create_time <= $2
          AND es.camera_event_id = ANY($3::varchar[])
          AND h.list_ids && $4::varchar[]
          AND LOWER(ca.area_name) = 'diem danh'
          AND ev.is_valid = true 
          AND ev.is_deleted = false
      ORDER BY ev.create_time DESC;
    `;

    // Run check-in and check-out queries in parallel
    const [checkinEvents, checkoutEvents] = await Promise.all([
      checkinCameraIds.length > 0
        ? this.lcms.$queryRawUnsafe<any[]>(query, startTime, endTime, checkinCameraIds, meeting.group_ids)
        : Promise.resolve([]),
      checkoutCameraIds.length > 0
        ? this.lcms.$queryRawUnsafe<any[]>(query, startTime, endTime, checkoutCameraIds, meeting.group_ids)
        : Promise.resolve([]),
    ]);

    return {
      checkinEvents,
      checkoutEvents,
      query,
      paramsCheckin: { startTime, endTime, checkinCameraIds, group_ids: meeting.group_ids },
      paramsCheckout: { startTime, endTime, checkoutCameraIds, group_ids: meeting.group_ids }
    };
  }
}
