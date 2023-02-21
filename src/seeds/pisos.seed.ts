import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Pisos } from "../entities/pisos";

export default class CreatePisos implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { pisos } = JSON.parse(readFileSync("./src/seeds/json/pisos.json", "utf8"));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Pisos)
      .values(pisos)
      .execute();
  }
}
