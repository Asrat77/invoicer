import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { InvoiceItem } from './invoice-items.entity';
import { InvoiceItemsService } from './invoice-items.service';
import { CreateInvoiceItemDto } from 'src/dto/create-invoiceItem.dto';
import { FindOneParams } from 'src/dto/findone-params.dto';

@Controller('invoice-items')
export class InvoiceItemsController {
  constructor(private invoiceItemService: InvoiceItemsService) {}

  @Get()
  async findAll(): Promise<InvoiceItem[]> {
    return this.invoiceItemService.findAll();
  }

  @Get(':id')
  async find(@Param() params: FindOneParams) {
    return this.invoiceItemService.find(params.id);
  }

  @Post()
  async create(@Body() createInvoiceItemDto: CreateInvoiceItemDto) {
    this.invoiceItemService.create(createInvoiceItemDto);
  }
}
