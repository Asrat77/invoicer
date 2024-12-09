import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  findAll(): Promise<Invoice[]> {
    return this.invoiceRepository.find();
  }

  find(id: number): Promise<Invoice | null> {
    return this.invoiceRepository.findOneBy({ id });
  }
  create(invoice: Invoice): Promise<Invoice> {
    return this.invoiceRepository.save(invoice);
  }
  async remove(id: number): Promise<void> {
    await this.invoiceRepository.delete(id);
  }
}
