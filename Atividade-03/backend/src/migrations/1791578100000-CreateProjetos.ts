import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateProjetos1791578100000 implements MigrationInterface {
  name = 'CreateProjetos1791578100000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "projetos" ("id" SERIAL NOT NULL, "nome" character varying(60) NOT NULL, "descricao" character varying(200), "cor" character varying NOT NULL, CONSTRAINT "PK_fb6b6aed4b30e10b976fe8bdf5b" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "projetos"`);
  }
}
