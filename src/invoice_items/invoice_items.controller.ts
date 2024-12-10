import { Controller, Get, Param, Body, Post } from '@nestjs/common';
import { InvoiceItem } from './invoice_item.entity';
import { InvoiceItemsService } from './invoice_items.service';

@Controller('invoice-items')
export class InvoiceItemsController {
  constructor(private invoiceItemService: InvoiceItemsService) {}

  @Get()
  async findAll(): Promise<InvoiceItem[]> {
    return this.invoiceItemService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number) {
    return this.invoiceItemService.find(id);
  }

  @Post()
  async create(@Body() invoiceItem: InvoiceItem) {
    this.invoiceItemService.create(invoiceItem);
  }
}
