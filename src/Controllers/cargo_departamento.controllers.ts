/*import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Bombero } from "../entities/bombero";
import { Cargo } from "../entities/cargo";
import { Cargo_bombero } from "../entities/cargo_bombero";
import { Departamento } from "../entities/departamento";
import { Inspeccion } from "../entities/inspeccion";
import { Local } from "../entities/local";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";


export const create = async (req: Request, res: Response) => {
  try {
    const { status,temporabilidad,nombre_cargo,nombre_dep,orden_General} = req.body;

    const queryRunner = AppDataSource.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction()

    const cargo_bombero = new Cargo_bombero ();

    cargo_bombero.status=status,
    cargo_bombero.temporabilidad=temporabilidad;


    const cargo = new Cargo ();

    cargo.nombre_cargo=nombre_cargo;
    

    const departamento = new Departamento ();

    departamento.nombre_dep=nombre_dep;

    const bombero= new Bombero ();

    bombero.ordenGeneral=orden_General,
    bombero.status=status;




    try {
        //await queryRunner.manager.save(person);

        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(cargo);
        await queryRunner.manager.save(departamento);
        await queryRunner.manager.save(cargo_bombero);
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

    return res.json([departamento,cargo,cargo_bombero,bombero]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};*/

