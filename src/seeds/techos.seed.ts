import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Techos } from "../entities/techos";
interface ITechos {
  nombre_techos: string
}
export default class CreateTechos implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { techos } = JSON.parse(readFileSync("./src/seeds/json/techos.json", "utf8"));

    const techosValues: ITechos[] = techos.map((nombre: string) => ({
      nombre_techos: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Techos)
      .values(techosValues)
      .orIgnore()
      .execute();
  }
}