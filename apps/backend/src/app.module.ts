import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { EventsGateway } from './events/events.gateway';
import { HumanModule } from './human/human.module';
import { HumanListModule } from './human-list/human-list.module';
import { CameraModule } from './camera/camera.module';
import { ChannelModule } from './channel/channel.module';
import { LocationModule } from './location/location.module';
import { MeetingModule } from './meeting/meeting.module';
import { MediaController } from './media/media.controller';

@Module({
  imports: [PrismaModule, HumanModule, HumanListModule, CameraModule, ChannelModule, LocationModule, MeetingModule],
  controllers: [MediaController],
  providers: [EventsGateway],
})
export class AppModule {}

