import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCodeToItem1733824959025 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE item
          ADD COLUMN code VARCHAR(255) NOT NULL;
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
          ALTER TABLE item
          DROP COLUMN code;
        `);
  }
}
