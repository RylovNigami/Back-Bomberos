import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Bombero } from "../entities/bombero";
import { Cargo } from "../entities/cargo";
import { Departamento } from "../entities/departamento";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";


export const create = async (req: Request, res: Response) => {
  try {
    const { firstName,lastName,cedula,telefono,correo,nombre_rango,ordenGeneral,status,nombre_cargo,nombre_dep } = req.body;

    const queryRunner = AppDataSource.createQueryRunner();
    queryRunner.connect();
    await  queryRunner.startTransaction()

    const person = new Person ();

    person.firstName= firstName;
    person.lastName=lastName;
    person.cedula=cedula;
    person.telefono=telefono;
    person.correo=correo;

    const rango = new Rango ();
    rango.nombre_rango=nombre_rango;

    const cargo = new Cargo ();
    cargo.nombre_cargo=nombre_cargo;

    const departamento = new Departamento ();
    departamento.nombre_dep=nombre_dep;

    const bombero = new Bombero ();
    bombero.ordenGeneral=ordenGeneral;
    bombero.status=status;
    bombero.person=person;
    bombero.rango=rango;


    

 


    try {
        await queryRunner.manager.save(person);

        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(rango);
        await queryRunner.manager.save(bombero);
        await queryRunner.manager.save(cargo);
        await queryRunner.manager.save(departamento);

        await queryRunner.commitTransaction();
    } catch (error) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    // await person.save();
    // await rango.save();
    // await bombero.save();

    return res.json([person,rango,bombero,departamento,cargo]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

