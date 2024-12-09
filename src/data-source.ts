import { DataSource } from 'typeorm';
import { Customer } from './customers/customer.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'test',
  entities: [Customer],
  synchronize: true,
  migrations: [
    /*...*/
  ],
  migrationsTableName: 'custom_migration_table',
});
