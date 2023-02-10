import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Bombero } from "../entities/bombero";
import { Cargo_bombero } from "../entities/cargo_bombero";
import { Inspeccion } from "../entities/inspeccion";
import { Local } from "../entities/local";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";


export const create = async (req: Request, res: Response) => {
  try {
    const { nro_inspeccion,fecha,hora,rif,firma_mercantil,ubicacion,firstName,lastName,cedula,correo,telefono, status, temporabilidad } = req.body;

    const queryRunner = AppDataSource.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction()

    const local = new Local ();

    local.rif=rif,
    local.firma_mercantil=firma_mercantil,
    local.ubicacion=ubicacion

    const person = new Person();
    person.firstName = firstName;
    person.lastName = lastName;
    person.cedula = cedula;
    person.correo = correo;
    person.telefono = telefono;


    const inspeccion = new Inspeccion ();
    inspeccion.nro_inspeccion=nro_inspeccion,
    inspeccion.fecha=fecha,
    inspeccion.hora=hora;

    const cargo_bombero = new Cargo_bombero ();
    cargo_bombero.status=status,
    cargo_bombero.temporabilidad=temporabilidad;

    



    try {
        await queryRunner.manager.save(person);

        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(inspeccion);
        await queryRunner.manager.save(local);

        await queryRunner.commitTransaction();
    } catch (error) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    // await person.save();
    // await rango.save();
    // await bombero.save();

    return res.json([local,inspeccion,person]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

