import { IsNumber, IsString } from 'class-validator';

export class CreateInvoiceDto {
  id: number;

  @IsString()
  status: string;

  generated_on?: Date;

  @IsNumber()
  total_price: number;

  @IsNumber()
  customerId: number;
}
