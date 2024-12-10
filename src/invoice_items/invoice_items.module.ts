import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceItem } from './invoice_item.entity';
import { InvoiceItemsController } from './invoice_items.controller';
import { InvoiceItemsService } from './invoice_items.service';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceItem])],
  controllers: [InvoiceItemsController],
  providers: [InvoiceItemsService],
})
export class InvoiceItemsModule {}
