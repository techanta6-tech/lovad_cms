import { Module } from '@nestjs/common';
import { HumanListService } from './human-list.service';
import { HumanListController } from './human-list.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [HumanListController],
  providers: [HumanListService],
})
export class HumanListModule {}
