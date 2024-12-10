import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';
import { CreateItemDto } from 'src/dto/create-item.dto';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  find(id: number): Promise<Item | null> {
    return this.itemsRepository.findOneBy({ id });
  }

  create(createItemDto: CreateItemDto): Promise<CreateItemDto> {
    return this.itemsRepository.save(createItemDto);
  }
  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
