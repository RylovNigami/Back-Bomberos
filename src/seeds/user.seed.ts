import { hash } from "bcrypt";
import {DataSource} from "typeorm";
import { Factory,Seeder } from "typeorm-seeding";
import { User } from "../entities/user";
import { Person } from "../entities/person";

export default class CreateUserSeeder implements Seeder{
    public async run (Factory: Factory,connection: DataSource): Promise<any>
    {
        await connection
        .createQueryBuilder()
        .insert()
        .into(Person)
        .values({
            firstName: "user",
            lastName: "user",
            cedula: 12345678,
            correo: "admin@gmail.com",
        })
        .execute();

        await connection
        .createQueryBuilder()
        .insert()
        .into(User)
        .values({
            email:"admin@gmail.com",
            password:await hash ("123456pass",10),
            active:true,
            person: {id:1}
        })
        .execute();
    }
}

