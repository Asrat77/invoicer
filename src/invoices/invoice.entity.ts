import { Customer } from '../customers/customer.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { InvoiceItem } from '../invoice-items/invoice-items.entity';
@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  generated_on: Date;

  @Column()
  total_price: number;

  @Column()
  customerId: number;

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  customer: Customer;

  @OneToMany(() => InvoiceItem, (invoiceItem) => invoiceItem.invoice)
  invoiceItems: InvoiceItem[];
}
