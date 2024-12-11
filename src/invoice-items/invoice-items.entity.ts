import { Invoice } from '../invoices/invoice.entity';
import { Item } from '../items/item.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class InvoiceItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  invoiceId: number;

  @Column()
  itemId: number;

  @ManyToOne(() => Invoice, (invoice) => invoice.invoiceItems)
  invoice: Invoice;

  @ManyToOne(() => Item, (item) => item.invoiceItems)
  item: Item;
}
