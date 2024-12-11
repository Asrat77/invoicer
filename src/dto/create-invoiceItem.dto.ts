import { IsNumber } from 'class-validator';

export class CreateInvoiceItemDto {
  id: number;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsNumber()
  invoiceId: number;

  @IsNumber()
  itemId: number;
}
