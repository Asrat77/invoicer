import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from 'src/dto/create-invoice.dto';
import { BaseService } from 'src/common/base.service';

@Injectable()
export class InvoicesService extends BaseService<Invoice, CreateInvoiceDto> {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {
    super(invoiceRepository, ['customer']);
  }
  getByCustomer(customerId: number) {
    return this.invoiceRepository
      .createQueryBuilder('invoice')
      .where('invoice.customerId = :customerId', { customerId })
      .getMany();
  }
}
