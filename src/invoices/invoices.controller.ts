import { Controller, Get, Body, Post, Param } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Invoice } from './invoice.entity';
import { CreateInvoiceDto } from 'src/dto/create-invoice.dto';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';
import { CustomersService } from 'src/customers/customers.service';
import { CustomerAndInvoiceDto } from 'src/dto/customer-and-invoice.dto';

@Controller('invoices')
export class InvoicesController {
  constructor(
    private invoiceService: InvoicesService,
    private customerService: CustomersService,
  ) {}
  @Get()
  async findAll(): Promise<Invoice[]> {
    return this.invoiceService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number) {
    return this.invoiceService.find(id);
  }

  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto) {
    this.invoiceService.create(createInvoiceDto);
  }
  @Get('by-customer/:customerId')
  async getByCustomer(
    @Param('customerId') customerId: number,
  ): Promise<Invoice[]> {
    return this.invoiceService.getByCustomer(customerId);
  }
  @Post('customer-invoice')
  async createCustomerAndInvoice(
    @Body() customerAndInvoiceDto: CustomerAndInvoiceDto,
  ): Promise<Invoice> {
    return this.invoiceService.createCustomerAndInvoice(customerAndInvoiceDto);
  }
}
