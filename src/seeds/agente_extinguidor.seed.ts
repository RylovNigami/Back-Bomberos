import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Agente_extinguidor } from "../entities/agente_extinguidor";
interface IAgente_extinguidor {
  nombre_agenteExtinguidor: string
}

export default class CreateAgente_extinguidor implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { agente_extinguidor } = JSON.parse(readFileSync("./src/seeds/json/agente_extinguidor.json", "utf8"));

    const agente_extinguidorValues: IAgente_extinguidor[] = agente_extinguidor.map((nombre_agenteExtinguidor: string) => ({
      nombre_agenteExtinguidor: nombre_agenteExtinguidor
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Agente_extinguidor)
      .values(agente_extinguidorValues)
      .orIgnore()
      .execute();
  }
}