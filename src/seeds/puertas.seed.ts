import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Puertas } from "../entities/puertas";
interface IPuertas {
  nombre_puertas: string
}
export default class CreatePuertas implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { puertas } = JSON.parse(readFileSync("./src/seeds/json/puertas.json", "utf8"));

    const puertasValues: IPuertas[] = puertas.map((nombre: string) => ({
      nombre_puertas: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Puertas)
      .values(puertasValues)
      .orIgnore()
      .execute();
  }
}