import { Controller, Get, Param } from '@nestjs/common';
import { HumanService } from './human.service';

@Controller('human')
export class HumanController {
  constructor(private readonly humanService: HumanService) {}

  @Get()
  async findAll() {
    return this.humanService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.humanService.findOne(id);
  }
}
