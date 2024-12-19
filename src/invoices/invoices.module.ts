import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesController } from './invoices.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { CustomersModule } from '../customers/customers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Invoice]),
    CustomersModule,
  ],
  providers: [InvoicesService],
  controllers: [InvoicesController],
})
export class InvoicesModule {}
