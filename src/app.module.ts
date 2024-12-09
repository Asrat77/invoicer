import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CustomersModule } from './customers/customers.module';
import { AppDataSource } from './data-source';
import { ItemsModule } from './items/items.module';
import { InvoicesModule } from './invoices/invoices.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(AppDataSource.options),
    CustomersModule,
    ItemsModule,
    InvoicesModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
