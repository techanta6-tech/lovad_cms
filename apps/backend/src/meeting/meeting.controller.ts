import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateMeetingDto,
  MeetingService,
  UpdateMeetingDto,
} from './meeting.service';

@Controller('meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Get()
  async findAll() {
    return this.meetingService.findAll();
  }

  @Get('event-logs')
  async getEventLogs() {
    return this.meetingService.getEventLogs();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.meetingService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateMeetingDto) {
    return this.meetingService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateMeetingDto) {
    return this.meetingService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.meetingService.remove(id);
  }

  @Get(':id/attendance-report')
  async getAttendanceReport(@Param('id') id: string) {
    return this.meetingService.getAttendanceReport(id);
  }
}
