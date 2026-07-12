import { Injectable } from '@nestjs/common';
import { DvmsPrismaService } from '../prisma/dvms-prisma.service';

// Các trường trả về — bỏ qua cfg_data (Bytes) nặng và không cần cho UI.
const CAMERA_SELECT = {
  id: true,
  name: true,
  search_tag: true,
  user_id_owner: true,
  time_created: true,
  time_modified: true,
  // Bỏ qua: cfg_data
} as const;

function mapCamera(c: any) {
  return {
    id: c.id,
    name: c.name,
    search_tag: c.search_tag,
    user_id_owner: c.user_id_owner,
    time_created: c.time_created,
    time_modified: c.time_modified,
  };
}

@Injectable()
export class CameraService {
  constructor(private readonly prisma: DvmsPrismaService) {}

  async findAll() {
    const cameras = await this.prisma.camera_cfg.findMany({
      orderBy: {
        time_created: 'asc',
      },
      select: CAMERA_SELECT,
    });
    return cameras.map(mapCamera);
  }

  async findOne(id: string) {
    const c = await this.prisma.camera_cfg.findUnique({
      where: { id },
      select: CAMERA_SELECT,
    });
    if (!c) return null;
    return mapCamera(c);
  }
}
