import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Huella } from "../entities/huella";
interface IHuella {
  nombre_huella: string
}
export default class CreateHuella implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { huella } = JSON.parse(readFileSync("./src/seeds/json/huella.json", "utf8"));

    const huellaValues: IHuella[] = huella.map((nombre: string) => ({
      nombre_huella: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Huella)
      .values(huellaValues)
      .orIgnore()
      .execute();
  }
}