import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { Injectable } from '@nestjs/common';

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
  create(customer: Customer): Promise<Customer> {
    return this.customersRepository.save(customer);
  }
  async remove(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }
}
