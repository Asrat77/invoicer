import { Get, Post, Body, Controller, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';
import { CreateItemDto } from 'src/dto/create-item.dto';
import { FindOneParams } from 'src/dto/findone-params.dto';
@Controller('items')
export class ItemsController {
  constructor(private itemService: ItemsService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }
  @Get(':id')
  async find(@Param() params: FindOneParams) {
    return this.itemService.find(params.id);
  }
  @Post()
  async create(@Body() createItemDto: CreateItemDto) {
    this.itemService.create(createItemDto);
  }
}
