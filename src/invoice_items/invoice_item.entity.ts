import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Item } from '../items/item.entity';
import { Invoice } from '../invoices/invoice.entity';

@Entity()
export class InvoiceItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceItems)
  invoice: Invoice;

  @ManyToOne(() => Item, (item) => item.invoiceItems)
  item: Item;
}
