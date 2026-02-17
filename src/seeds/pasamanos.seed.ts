import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Pasamanos } from "../entities/pasamanos";
interface IPasamanos {
  nombre_pasamanos: string
}
export default class CreatePasamanos implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { pasamanos } = JSON.parse(readFileSync("./src/seeds/json/pasamanos.json", "utf8"));

    const pasamanosValues: IPasamanos[] = pasamanos.map((nombre: string) => ({
      nombre_pasamanos: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Pasamanos)
      .values(pasamanosValues)
      .orIgnore()
      .execute();
  }
}