import { validate } from 'class-validator';
import { Repository } from 'typeorm';

export class BaseService<T, D> {
  constructor(
    private readonly repository: Repository<T>,
    private readonly relations?: string[],
  ) {}

  findAll(): Promise<T[]> {
    return this.repository.find({ relations: this.relations });
  }

  find(id: number): Promise<T | null> {
    return this.repository.findOne({
      where: { id } as any,
      relations: this.relations,
    });
  }

  async create(dto: D): Promise<T> {
    const errors = await validate(dto as any);
    if (errors.length > 0) {
      throw new Error(
        `Validation failed: ${errors
          .map((e) => Object.values(e.constraints || {}).join(', '))
          .join('; ')}`,
      );
    }
    const entity = this.repository.create(dto as any);
    return this.repository.save(entity as any);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
