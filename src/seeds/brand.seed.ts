import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Brand } from "../entities/brand";
interface IBrand {
  brandname: string
}

export default class CreateBrand implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    const { brand } = JSON.parse(readFileSync("./src/seeds/json/brand.json", "utf8"));

    const brandValues: IBrand[] = brand.map((brandname: string) => ({
      brandname: brandname
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Brand)
      .values(brandValues)
      .orIgnore()
      .execute();
  }
}