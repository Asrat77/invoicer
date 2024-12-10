import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { InvoiceItem } from '../invoice_items/invoice_item.entity';
import { Customer } from '../customers/customer.entity';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  generated_on: string;

  @Column()
  total_price: number;

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  customer: Customer;

  @OneToMany(() => InvoiceItem, (invoiceItem) => invoiceItem.invoice)
  invoiceItems: InvoiceItem[];
}
