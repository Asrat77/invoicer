import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { InvoiceItem } from '../invoice_items/invoice_item.entity';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  //@Column()
  //code: string; // Uncomment and modify if needed

  @Column()
  name: string;

  @OneToMany(() => InvoiceItem, (invoiceItem) => invoiceItem.item)
  invoiceItems: InvoiceItem[];
}
