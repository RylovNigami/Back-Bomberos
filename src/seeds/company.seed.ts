import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Company } from "../entities/company";
interface ICompany {
  companyName: string
}

export default class CreateCompany implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { company } = JSON.parse(readFileSync("./src/seeds/json/company.json", "utf8"));

    const companyValues: ICompany[] = company.map((companyName: string) => ({
      companyName: companyName
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Company)
      .values(companyValues)
      .orIgnore()
      .execute();
  }
}