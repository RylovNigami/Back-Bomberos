import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Contrahuella } from "../entities/contrahuella";
interface IContrahuella {
  nombre_contrahuella: string
}

export default class CreateContrahuella implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { contrahuella } = JSON.parse(readFileSync("./src/seeds/json/contrahuella.json", "utf8"));

    const contrahuellaValues: IContrahuella[] = contrahuella.map((nombre: string) => ({
      nombre_contrahuella: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Contrahuella)
      .values(contrahuellaValues)
      .orIgnore()
      .execute();
  }
}