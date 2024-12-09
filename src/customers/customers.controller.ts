import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
  @Get(':id')
  async find(@Param('id') id: number) {
    return this.customerService.find(id);
  }
  @Post()
  async create(@Body() customer: Customer) {
    this.customerService.create(customer);
  }
}
