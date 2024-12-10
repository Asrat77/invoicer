import { IsString } from 'class-validator';

export class CreateItemDto {
  id: number;

  @IsString()
  code: string;

  @IsString()
  name: string;
}
