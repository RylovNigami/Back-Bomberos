import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Plafones } from "../entities/plafones";
interface IPlafones {
  nombre_plafones: string
}
export default class CreatePlafones implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { plafones } = JSON.parse(readFileSync("./src/seeds/json/plafones.json", "utf8"));

    const plafonesValues: IPlafones[] = plafones.map((nombre: string) => ({
      nombre_plafones: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Plafones)
      .values(plafonesValues)
      .orIgnore()
      .execute();
  }
}