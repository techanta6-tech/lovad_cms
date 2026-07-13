import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/dvms';

@Injectable()
export class DvmsPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
