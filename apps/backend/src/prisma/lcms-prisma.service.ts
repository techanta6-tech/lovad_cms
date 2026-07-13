import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/lcms';

@Injectable()
export class LcmsPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
