import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvoiceItem } from './invoice-items.entity';
import { Repository } from 'typeorm';
import { CreateInvoiceItemDto } from 'src/dto/create-invoiceItem.dto';

@Injectable()
export class InvoiceItemsService {
  constructor(
    @InjectRepository(InvoiceItem)
    private invoiceItemRepository: Repository<InvoiceItem>,
  ) {}

  findAll(): Promise<InvoiceItem[]> {
    return this.invoiceItemRepository.find({
      relations: ['item', 'invoice'],
    });
  }

  find(id: number): Promise<InvoiceItem | null> {
    return this.invoiceItemRepository.findOne({
      where: { id },
      relations: ['item', 'invoice'],
    });
  }
  create(
    createInvoiceItemDto: CreateInvoiceItemDto,
  ): Promise<CreateInvoiceItemDto> {
    return this.invoiceItemRepository.save(createInvoiceItemDto);
  }
  async remove(id: number): Promise<void> {
    await this.invoiceItemRepository.delete(id);
  }
}
