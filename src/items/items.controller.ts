import { Get, Post, Body, Controller, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';
@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }
  @Get(':id')
  async find(@Param('id') id: number) {
    return this.itemService.find(id);
  }
  @Post()
  async create(@Body() item: Item) {
    this.itemService.create(item);
  }
}
