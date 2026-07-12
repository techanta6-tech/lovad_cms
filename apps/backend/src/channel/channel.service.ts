import { Injectable } from '@nestjs/common';
import { DvmsPrismaService } from '../prisma/dvms-prisma.service';

// Các trường trả về — bỏ qua cfg_data (Bytes) nặng và không cần cho UI.
const CHANNEL_SELECT = {
  id: true,
  name: true,
  camera_mapping_id: true,
  search_tag: true,
  user_id_owner: true,
  time_created: true,
  time_modified: true,
  // Bỏ qua: cfg_data
} as const;

function mapChannel(c: any) {
  return {
    id: c.id,
    name: c.name,
    camera_mapping_id: c.camera_mapping_id,
    search_tag: c.search_tag,
    user_id_owner: c.user_id_owner,
    time_created: c.time_created,
    time_modified: c.time_modified,
  };
}

@Injectable()
export class ChannelService {
  constructor(private readonly prisma: DvmsPrismaService) {}

  async findAll() {
    const channels = await this.prisma.channel_cfg.findMany({
      orderBy: {
        time_created: 'asc',
      },
      select: CHANNEL_SELECT,
    });
    return channels.map(mapChannel);
  }

  async findOne(id: string) {
    const c = await this.prisma.channel_cfg.findUnique({
      where: { id },
      select: CHANNEL_SELECT,
    });
    if (!c) return null;
    return mapChannel(c);
  }
}
