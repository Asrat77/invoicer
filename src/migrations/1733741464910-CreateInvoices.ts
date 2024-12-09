import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInvoices1733741464910 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('invoice');
    if (!tableExists) {
      await queryRunner.query(`
        CREATE TABLE invoice (
          id INT AUTO_INCREMENT PRIMARY KEY,
          status VARCHAR(255) NOT NULL,
          generated_on DATE,
          total_price DECIMAL(10, 2) NOT NULL,
          customerId INT,
          CONSTRAINT FK_invoice_customer FOREIGN KEY (customerId) REFERENCES customer(id) ON DELETE SET NULL
        )
      `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('invoice');
    if (tableExists) {
      await queryRunner.query(`DROP TABLE invoice`);
    }
  }
}
