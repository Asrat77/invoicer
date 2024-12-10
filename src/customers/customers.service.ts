import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customersRepository.find();
  }

  find(id: number): Promise<Customer | null> {
    return this.customersRepository.findOneBy({ id });
  }
  create(customerDto: CreateCustomerDto): Promise<CreateCustomerDto> {
    return this.customersRepository.save(customerDto);
  }
  async remove(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }
}
