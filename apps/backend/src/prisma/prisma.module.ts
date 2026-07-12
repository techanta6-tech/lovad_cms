import { Module } from '@nestjs/common';
import { LcmsPrismaService } from './lcms-prisma.service';
import { DvmsPrismaService } from './dvms-prisma.service';
import { CmsPrismaService } from './cms-prisma.service';

@Module({
  providers: [LcmsPrismaService, DvmsPrismaService, CmsPrismaService],
  exports: [LcmsPrismaService, DvmsPrismaService, CmsPrismaService],
})
export class PrismaModule {}
