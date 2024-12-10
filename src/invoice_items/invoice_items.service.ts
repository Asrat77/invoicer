import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceItem } from './invoice_item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceItemsService {
  constructor(
    @InjectRepository(InvoiceItem)
    private invoiceItemRepository: Repository<InvoiceItem>,
  ) {}

  findAll(): Promise<InvoiceItem[]> {
    return this.invoiceItemRepository.find();
  }

  find(id: number): Promise<InvoiceItem | null> {
    return this.invoiceItemRepository.findOneBy({ id });
  }

  create(invoiceItem: InvoiceItem): Promise<InvoiceItem> {
    return this.invoiceItemRepository.save(invoiceItem);
  }
  async remove(id: number): Promise<void> {
    await this.invoiceItemRepository.delete(id);
  }
}
