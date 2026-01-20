import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Paredes } from "../entities/paredes";
interface IParedes {
  nombre_paredes: string
}
export default class CreateParedes implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { paredes } = JSON.parse(readFileSync("./src/seeds/json/paredes.json", "utf8"));

    const paredesValues: IParedes[] = paredes.map((nombre: string) => ({
      nombre_paredes: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Paredes)
      .values(paredesValues)
      .orIgnore()
      .execute();
  }
}