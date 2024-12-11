import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInvoiceItems1733888960820 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('invoice_item');
    if (!tableExists) {
      await queryRunner.query(`
             CREATE TABLE invoice_item (
               id INT AUTO_INCREMENT PRIMARY KEY,
               quantity INT NOT NULL,
               price DECIMAL(10, 2) NOT NULL,
               invoiceId INT NOT NULL,
               itemId INT NOT NULL,
               CONSTRAINT FK_invoice FOREIGN KEY (invoiceId) REFERENCES invoice (id) ON DELETE CASCADE,
               CONSTRAINT FK_item FOREIGN KEY (itemId) REFERENCES item (id) ON DELETE CASCADE
             )
           `);
    }
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    const tableExists = await queryRunner.hasTable('invoice_item');
    if (tableExists) {
      await queryRunner.query(`
             DROP TABLE invoice_item
           `);
    }
  }
}
