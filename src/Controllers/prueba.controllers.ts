import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Bombero } from "../entities/bombero";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";


export const create = async (req: Request, res: Response) => {
  try {
    const { firstName,lastName,cedula,telefono,correo,nombre_rango_bombero,nombre_rango,ordenGeneral,status } = req.body;

    const queryRunner = AppDataSource.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction()

    const person = new Person ();

    person.firstName= firstName;
    person.lastName=lastName;
    person.cedula=cedula;
    person.telefono=telefono;
    person.correo=correo;

    const rango = new Rango ();
    rango.nombre_rango=nombre_rango;

    const bombero = new Bombero ();
    //bombero.nombre_rango_bombero= nombre_rango_bombero;
    bombero.ordenGeneral=ordenGeneral;
    bombero.status=status;
    bombero.person=person;
    bombero.rango=rango;

    try {
        await queryRunner.manager.save(person);

        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(rango);
        await queryRunner.manager.save(bombero);

        await queryRunner.commitTransaction();
    } catch (error) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    // await person.save();
    // await rango.save();
    // await bombero.save();

    return res.json([person,rango,bombero]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

