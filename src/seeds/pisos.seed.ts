import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Pisos } from "../entities/pisos";
interface IPisos {
  nombre_pisos: string
}
export default class CreatePisos implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { pisos } = JSON.parse(readFileSync("./src/seeds/json/pisos.json", "utf8"));

    const pisosValues: IPisos[] = pisos;
    await connection
      .createQueryBuilder()
      .insert()
      .into(Pisos)
      .values(pisosValues)
      .execute();
  }
}
