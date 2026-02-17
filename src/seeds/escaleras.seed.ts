import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Escaleras } from "../entities/escaleras";
interface IEscaleras {
  nombre_escaleras: string
}
export default class CreateEscaleras implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { escaleras } = JSON.parse(readFileSync("./src/seeds/json/escaleras.json", "utf8"));

    const escalerasValues: IEscaleras[] = escaleras.map((nombre: string) => ({
      nombre_escaleras: nombre
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Escaleras)
      .values(escalerasValues)
      .orIgnore()
      .execute();
  }
}