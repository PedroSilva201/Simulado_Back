import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1686517966497 implements MigrationInterface {
    name = 'Default1686517966497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "uf" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "sigla" varchar(2) NOT NULL, "nome" varchar(50) NOT NULL, CONSTRAINT "UQ_0f16263fe4a89c9cb917c4658d1" UNIQUE ("sigla"), CONSTRAINT "UQ_5bc69e385e763de6ff62529aca8" UNIQUE ("nome"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "uf"`);
    }

}
