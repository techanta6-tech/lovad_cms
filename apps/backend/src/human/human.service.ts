import { Injectable } from '@nestjs/common';
import { LcmsPrismaService } from '../prisma/lcms-prisma.service';

// Các trường cần thiết — bỏ qua binary nặng không cần thiết
const HUMAN_SELECT = {
  id: true,
  full_name: true,
  document_id: true,
  id_type: true,
  release_date: true,
  issued_by: true,
  birthday: true,
  gender: true,
  phone_number: true,
  email: true,
  address: true,
  list_ids: true,
  avatars: true, // chỉ lấy để convert sang base64, không trả raw bytes
  time_created: true,
  time_modified: true,
  // Bỏ qua: id_scan_images, other_images, root_face_images,
  // cropped_face_images, face_features, certificates_json_text,
  // note, company, height, weight
} as const;

function toBase64Avatar(avatars: Buffer[] | Uint8Array[] | null | undefined): string | null {
  if (!avatars || avatars.length === 0) return null;
  const buf = avatars[0];
  if (!buf || (buf as any).length === 0) return null;
  return `data:image/jpeg;base64,${Buffer.from(buf as any).toString('base64')}`;
}

function mapHuman(h: any) {
  return {
    id: h.id,
    full_name: h.full_name,
    document_id: h.document_id,
    id_type: h.id_type,
    release_date: h.release_date,
    issued_by: h.issued_by,
    birthday: h.birthday,
    gender: h.gender,
    phone_number: h.phone_number,
    email: h.email,
    address: h.address,
    list_ids: h.list_ids,
    avatar_base64: toBase64Avatar(h.avatars),
    time_created: h.time_created,
    time_modified: h.time_modified,
  };
}

@Injectable()
export class HumanService {
  constructor(private readonly prisma: LcmsPrismaService) {}

  async findAll() {
    const humans = await this.prisma.human_info.findMany({
      where: {
        is_deleted: {
          not: true,
        },
      },
      orderBy: {
        time_created: 'desc',
      },
      select: HUMAN_SELECT,
    });
    return humans.map(mapHuman);
  }

  async findOne(id: string) {
    const h = await this.prisma.human_info.findFirst({
      where: {
        id,
        is_deleted: {
          not: true,
        },
      },
      select: HUMAN_SELECT,
    });
    if (!h) return null;
    return mapHuman(h);
  }
}
