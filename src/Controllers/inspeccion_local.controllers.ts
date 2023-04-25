import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Bombero} from "../entities/bombero";

import { Inspeccion } from "../entities/inspeccion";
import { Local } from "../entities/local";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";
import { Parroquia } from "../entities/parroquia";


export const create = async (req: Request, res: Response) => {
  try {
    const { nro_inspeccion,fecha,hora,rif,firma_mercantil,ocupacion,existe_guia,cumple_ordenamiento,
      observaciones_inspeccion,ubicacion,firstName,lastName,cedula,correo,telefono,ordenGeneral, status,genero,
       rango, cargo,departamento, parroquia } = req.body;

    const queryRunner = AppDataSource.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction()

    const local = new Local ();
    local.rif=rif,
    local.firma_mercantil=firma_mercantil,
    local.ubicacion=ubicacion,
    local.ocupacion=ocupacion;
    local.parroquia=parroquia;


    const person = new Person();
    person.firstName = firstName;
    person.lastName = lastName;
    person.cedula = cedula;
    person.correo = correo;
    person.telefono = telefono;

    const bombero = new  Bombero();
    bombero.ordenGeneral=ordenGeneral,
    bombero.status=status,
    bombero.genero=genero,
    bombero.rango=rango,
    bombero.cargo=cargo,
    bombero.departamento=departamento;

    const inspeccion = new Inspeccion ();
    inspeccion.existe_guia=existe_guia,
    inspeccion.nro_inspeccion=nro_inspeccion,
    inspeccion.fecha=fecha,
    inspeccion.hora=hora,
    inspeccion.cumple_ordenamiento=cumple_ordenamiento,
    inspeccion.observaciones_inspeccion=observaciones_inspeccion;

    



    try {
        await queryRunner.manager.save(person);
        await queryRunner.manager.save(local);
        await queryRunner.manager.save(bombero);
        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(inspeccion);
    

        await queryRunner.commitTransaction();
    } catch (error) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    // await person.save();
    // await rango.save();
    // await bombero.save();

    return res.json([local,person,bombero,inspeccion]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

