import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Customer } from './customer.entity';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { FindOneParams } from 'src/dto/findone-params.dto';

@Controller('customers')
export class CustomersController {
  constructor(private customerService: CustomersService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
  @Get(':id')
  async find(@Param() params: FindOneParams) {
    return this.customerService.find(params.id);
  }
  @Post()
  async create(@Body() customerDto: CreateCustomerDto) {
    this.customerService.create(customerDto);
  }
}
