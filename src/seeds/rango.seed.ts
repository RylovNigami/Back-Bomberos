import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Rango } from "../entities/rango";
interface IRango {
  nombre_rango: string
}
export default class CreateRango implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { rango } = JSON.parse(readFileSync("./src/seeds/json/rango.json", "utf8"));

    const rangoValues: IRango[] = rango.map((nombre: string) => ({
      nombre_rango: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Rango)
      .values(rangoValues)
      .orIgnore()
      .execute();
  }
}