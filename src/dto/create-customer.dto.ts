import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCustomerDto {
  id: number;

  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  last_name: string;
}
