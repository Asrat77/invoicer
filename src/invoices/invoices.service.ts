import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './invoice.entity';
import { EntityManager, Repository } from 'typeorm';
import { CreateInvoiceDto } from 'src/dto/create-invoice.dto';
import { BaseService } from 'src/common/base.service';
import { Customer } from 'src/customers/customer.entity';
import { CustomerAndInvoiceDto } from 'src/dto/customer-and-invoice.dto';

@Injectable()
export class InvoicesService extends BaseService<Invoice, CreateInvoiceDto> {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {
    super(invoiceRepository, ['customer']);
  }
  getByCustomer(customerId: number) {
    return this.invoiceRepository
      .createQueryBuilder('invoice')
      .where('invoice.customerId = :customerId', { customerId })
      .getMany();
  }
  async createCustomerAndInvoice(
    customerAndInvoiceDto: CustomerAndInvoiceDto,
  ): Promise<Invoice> {
    return await this.invoiceRepository.manager.transaction(
      async (entityManager: EntityManager) => {
        const customer = entityManager.create(Customer, {
          first_name: customerAndInvoiceDto.first_name,
          last_name: customerAndInvoiceDto.last_name,
        });
        const savedCustomer = await entityManager.save(Customer, customer);

        const invoice = entityManager.create(Invoice, {
          status: customerAndInvoiceDto.status,
          total_price: customerAndInvoiceDto.total_price,
          customerId: savedCustomer.id,
        });
        return await entityManager.save(Invoice, invoice);
      },
    );
  }
}
