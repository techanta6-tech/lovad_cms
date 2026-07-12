import { Controller, Get, Param } from '@nestjs/common';
import { CameraService } from './camera.service';

@Controller('camera')
export class CameraController {
  constructor(private readonly cameraService: CameraService) {}

  @Get()
  async findAll() {
    return this.cameraService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cameraService.findOne(id);
  }
}
