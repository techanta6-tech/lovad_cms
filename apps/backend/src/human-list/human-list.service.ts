import { Injectable } from '@nestjs/common';
import { LcmsPrismaService } from '../prisma/lcms-prisma.service';

@Injectable()
export class HumanListService {
  constructor(private readonly prisma: LcmsPrismaService) {}

  async findAll() {
    return this.prisma.human_list.findMany({
      where: {
        is_deleted: {
          not: true,
        },
      },
      orderBy: {
        time_created: 'desc',
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.human_list.findFirst({
      where: {
        id,
        is_deleted: {
          not: true,
        },
      },
    });
  }
}
