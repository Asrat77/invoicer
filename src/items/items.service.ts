import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './item.entity';

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

  create(item: Item): Promise<Item> {
    return this.itemsRepository.save(item);
  }
  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
