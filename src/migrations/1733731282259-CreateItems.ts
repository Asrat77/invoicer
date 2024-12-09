import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateItems1733731282259 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('item');
    if (!tableExists) {
      await queryRunner.query(`
        CREATE TABLE item (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(255) NOT NULL
        )
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('item');
    if (tableExists) {
      await queryRunner.query(`DROP TABLE item`);
    }
  }
}
