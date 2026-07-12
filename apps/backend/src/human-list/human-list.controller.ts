import { Controller, Get, Param } from '@nestjs/common';
import { HumanListService } from './human-list.service';

@Controller('human-list')
export class HumanListController {
  constructor(private readonly humanListService: HumanListService) {}

  @Get()
  async findAll() {
    return this.humanListService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.humanListService.findOne(id);
  }
}
