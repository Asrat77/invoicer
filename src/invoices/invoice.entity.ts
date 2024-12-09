import { Customer } from '../customers/customer.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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
}
