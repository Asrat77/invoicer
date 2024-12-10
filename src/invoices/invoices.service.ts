import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from 'src/dto/create-invoice.dto';

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
    return this.invoiceRepository.findOne({
      where: { id },
      relations: ['customer'],
    });
  }
  create(createInvoiceDto: CreateInvoiceDto): Promise<CreateInvoiceDto> {
    return this.invoiceRepository.save(createInvoiceDto);
  }
  async remove(id: number): Promise<void> {
    await this.invoiceRepository.delete(id);
  }
}
