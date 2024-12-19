import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CustomerAndInvoiceDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsNumber()
  total_price: number;
}