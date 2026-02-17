import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Ventanas } from "../entities/ventanas";
interface IVentanas {
  nombre_ventanas: string
}
export default class CreateVentanas implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { ventanas } = JSON.parse(readFileSync("./src/seeds/json/ventanas.json", "utf8"));

    const ventanasValues: IVentanas[] = ventanas.map((nombre: string) => ({
      nombre_ventanas: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Ventanas)
      .values(ventanasValues)
      .orIgnore()
      .execute();
  }
}