import { DataSource } from 'typeorm';
import { Customer } from './customers/customer.entity';
import { Item } from './items/item.entity';
import { Invoice } from './invoices/invoice.entity';
import { InvoiceItem } from './invoice-items/invoice-items.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [Customer, Item, Invoice, InvoiceItem],
  synchronize: false,
  migrations: [__dirname + '/migrations/*.ts'],
  migrationsTableName: 'custom_migration_table',
});
