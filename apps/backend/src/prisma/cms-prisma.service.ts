import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../generated/cms_webserver';

@Injectable()
export class CmsPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
