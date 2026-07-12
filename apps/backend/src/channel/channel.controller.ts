import { Controller, Get, Param } from '@nestjs/common';
import { ChannelService } from './channel.service';

@Controller('channel')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Get()
  async findAll() {
    return this.channelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.channelService.findOne(id);
  }
}
