import { randomUUID } from 'crypto';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Prisma } from '@prisma/client/cms_webserver';
import { CmsPrismaService } from '../prisma/cms-prisma.service';
import { DvmsPrismaService } from '../prisma/dvms-prisma.service';

export interface LocationWithBindings {
  id: string;
  name: string;
  code: string;
  cameras: Array<{
    id: string;
    camera_id: string;
    role: string[];
  }>;
}

export interface CreateLocationDto {
  name: string;
  code: string;
}

export interface UpdateLocationDto {
  name?: string;
  code?: string;
}

export interface CreateCameraBindDto {
  camera_id: string;
  role?: string[];
}

export interface UpdateCameraBindDto {
  camera_id?: string;
  role?: string[];
}

// Prisma error code for "unique constraint failed" (e.g. duplicate `code`).
const PRISMA_UNIQUE_CONSTRAINT = 'P2002';
// Prisma error code for "record to update/delete does not exist".
const PRISMA_NOT_FOUND = 'P2025';

@Injectable()
export class LocationService {
  constructor(
    private readonly cms: CmsPrismaService,
    private readonly dvms: DvmsPrismaService,
  ) {}

  async findAll(): Promise<LocationWithBindings[]> {
    const locations = await this.cms.location.findMany({
      orderBy: {
        time_created: 'asc',
      },
      include: {
        camera_binds: {
          select: {
            id: true,
            camera_id: true,
            role: true,
          },
        },
      },
    });

    return locations.map(loc => ({
      id: loc.id,
      name: loc.name,
      code: loc.code,
      cameras: loc.camera_binds,
    }));
  }

  async findOne(id: string): Promise<LocationWithBindings | null> {
    const location = await this.cms.location.findUnique({
      where: { id },
      include: {
        camera_binds: {
          select: {
            id: true,
            camera_id: true,
            role: true,
          },
        },
      },
    });

    if (!location) return null;

    return {
      id: location.id,
      name: location.name,
      code: location.code,
      cameras: location.camera_binds,
    };
  }

  async create(dto: CreateLocationDto): Promise<LocationWithBindings> {
    if (!dto.name?.trim()) {
      throw new BadRequestException('name không được để trống');
    }
    if (!dto.code?.trim()) {
      throw new BadRequestException('code không được để trống');
    }

    try {
      const location = await this.cms.location.create({
        data: {
          id: randomUUID(),
          name: dto.name.trim(),
          code: dto.code.trim(),
        },
      });

      return { id: location.id, name: location.name, code: location.code, cameras: [] };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === PRISMA_UNIQUE_CONSTRAINT) {
        throw new ConflictException(`code "${dto.code}" đã tồn tại`);
      }
      throw e;
    }
  }

  async update(id: string, dto: UpdateLocationDto): Promise<LocationWithBindings> {
    if (dto.name !== undefined && !dto.name.trim()) {
      throw new BadRequestException('name không được để trống');
    }
    if (dto.code !== undefined && !dto.code.trim()) {
      throw new BadRequestException('code không được để trống');
    }

    try {
      const location = await this.cms.location.update({
        where: { id },
        data: {
          ...(dto.name !== undefined ? { name: dto.name.trim() } : {}),
          ...(dto.code !== undefined ? { code: dto.code.trim() } : {}),
        },
        include: {
          camera_binds: {
            select: { id: true, camera_id: true, role: true },
          },
        },
      });

      return {
        id: location.id,
        name: location.name,
        code: location.code,
        cameras: location.camera_binds,
      };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === PRISMA_UNIQUE_CONSTRAINT) {
          throw new ConflictException(`code "${dto.code}" đã tồn tại`);
        }
        if (e.code === PRISMA_NOT_FOUND) {
          throw new NotFoundException(`Không tìm thấy location id "${id}"`);
        }
      }
      throw e;
    }
  }

  async remove(id: string): Promise<{ id: string }> {
    try {
      // location_camera_bind rows are removed automatically via onDelete: Cascade.
      await this.cms.location.delete({ where: { id } });
      return { id };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === PRISMA_NOT_FOUND) {
        throw new NotFoundException(`Không tìm thấy location id "${id}"`);
      }
      throw e;
    }
  }

  // ---- location_camera_bind ----

  async addCameraBind(locationId: string, dto: CreateCameraBindDto) {
    if (!dto.camera_id?.trim()) {
      throw new BadRequestException('camera_id không được để trống');
    }

    const location = await this.cms.location.findUnique({ where: { id: locationId } });
    if (!location) {
      throw new NotFoundException(`Không tìm thấy location id "${locationId}"`);
    }

    const bind = await this.cms.location_camera_bind.create({
      data: {
        id: randomUUID(),
        location_id: locationId,
        camera_id: dto.camera_id.trim(),
        role: dto.role ?? [],
      },
    });

    return { id: bind.id, camera_id: bind.camera_id, role: bind.role };
  }

  async updateCameraBind(bindId: string, dto: UpdateCameraBindDto) {
    if (dto.camera_id !== undefined && !dto.camera_id.trim()) {
      throw new BadRequestException('camera_id không được để trống');
    }

    try {
      const bind = await this.cms.location_camera_bind.update({
        where: { id: bindId },
        data: {
          ...(dto.camera_id !== undefined ? { camera_id: dto.camera_id.trim() } : {}),
          ...(dto.role !== undefined ? { role: dto.role } : {}),
        },
      });

      return { id: bind.id, camera_id: bind.camera_id, role: bind.role };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === PRISMA_NOT_FOUND) {
        throw new NotFoundException(`Không tìm thấy camera bind id "${bindId}"`);
      }
      throw e;
    }
  }

  async removeCameraBind(bindId: string): Promise<{ id: string }> {
    try {
      await this.cms.location_camera_bind.delete({ where: { id: bindId } });
      return { id: bindId };
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === PRISMA_NOT_FOUND) {
        throw new NotFoundException(`Không tìm thấy camera bind id "${bindId}"`);
      }
      throw e;
    }
  }
}
