import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCustomers1733726809525 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('customer');
    if (!tableExists) {
      await queryRunner.query(`
        CREATE TABLE customer (
          id INT AUTO_INCREMENT PRIMARY KEY,
          first_name VARCHAR(255) NOT NULL,
          last_name VARCHAR(255) NOT NULL
        )
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('customer');
    if (tableExists) {
      await queryRunner.query(`DROP TABLE customer`);
    }
  }
}
