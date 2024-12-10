import { Customer } from '../customers/customer.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

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

  @ManyToOne(() => Customer, (customer) => customer.invoices)
  customer: Customer;
}
