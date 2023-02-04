import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Bombero } from "../entities/bombero";
import { Inspeccion } from "../entities/inspeccion";
import { Local } from "../entities/local";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";


export const create = async (req: Request, res: Response) => {
  try {
    const { nro_inspeccion,fecha,hora,rif,firma_mercantil,ubicacion } = req.body;

    const queryRunner = AppDataSource.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction()

    const local = new Local ();

    local.rif=rif,
    local.firma_mercantil=firma_mercantil,
    local.ubicacion=ubicacion


    const inspeccion = new Inspeccion ();
   inspeccion.nro_inspeccion=nro_inspeccion,
    inspeccion.fecha=fecha,
    inspeccion.hora=hora;



    try {
        //await queryRunner.manager.save(person);

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

    return res.json([local,inspeccion]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

