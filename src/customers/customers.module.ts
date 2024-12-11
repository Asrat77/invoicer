import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customer } from './customer.entity';
import { Invoice } from '../invoices/invoice.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Invoice])],
  providers: [CustomersService],
  controllers: [CustomersController],
})
export class CustomersModule {}
