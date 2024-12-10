import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  show(@Param('id') id: string): string {
    return `Cat with id: #${id}`;
  }
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
