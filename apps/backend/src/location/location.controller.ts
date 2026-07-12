import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateCameraBindDto,
  CreateLocationDto,
  LocationService,
  UpdateCameraBindDto,
  UpdateLocationDto,
} from './location.service';

@Controller('location')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  async findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.locationService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateLocationDto) {
    return this.locationService.create(dto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateLocationDto) {
    return this.locationService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.locationService.remove(id);
  }

  // ---- location_camera_bind ----

  @Post(':id/cameras')
  async addCameraBind(@Param('id') id: string, @Body() dto: CreateCameraBindDto) {
    return this.locationService.addCameraBind(id, dto);
  }

  @Put('cameras/:bindId')
  async updateCameraBind(@Param('bindId') bindId: string, @Body() dto: UpdateCameraBindDto) {
    return this.locationService.updateCameraBind(bindId, dto);
  }

  @Delete('cameras/:bindId')
  async removeCameraBind(@Param('bindId') bindId: string) {
    return this.locationService.removeCameraBind(bindId);
  }
}
