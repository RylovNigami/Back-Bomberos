import { hash } from "bcrypt";
import {DataSource} from "typeorm";
import { Factory,Seeder } from "typeorm-seeding";
import { User } from "../entities/user";

export default class CreateUserSeeder implements Seeder{
    public async run (Factory: Factory,connection: DataSource): Promise<any>
    {
        await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
            email:"admin@gmail.com",
            password:await hash ("12345678pass",10),
            active:true,
        })
        .execute();

    }




}

