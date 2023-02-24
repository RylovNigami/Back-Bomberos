import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Extintor_local } from "../entities/extintor_local";
import { Extintor_p } from "../entities/extintor_p";
import { Local } from "../entities/local";


export const create = async (req: Request, res: Response) => {
  
  const { cant_portatil,operativo_extintor,tipo_extintor,capacidad_extintor,empresa,reubicacion,
    rif,firma_mercantil,ubicacion,posee,nro_requiere,requiere,tipo_requiere} = req.body;

const queryRunner = AppDataSource.createQueryRunner();
await queryRunner.connect();
await queryRunner.startTransaction()

const local = new Local ();
local.rif=rif;
local.firma_mercantil=firma_mercantil;
local.ubicacion=ubicacion;

const extintor_p = new Extintor_p ();
extintor_p.posee=posee;
extintor_p.nro_requiere=nro_requiere;
extintor_p.requiere=requiere;
extintor_p.tipo_requiere=tipo_requiere;

const extintor_local = new Extintor_local ();
extintor_local.cant_portatil=cant_portatil;
extintor_local.capacidad_extintor=capacidad_extintor;
extintor_local.operativo_extintor=operativo_extintor;
extintor_local.tipo_extintor=tipo_extintor;
extintor_local.empresa=empresa;
extintor_local.reubicacion=reubicacion;
extintor_local.extintor_p=extintor_p;
extintor_local.local=local;
  try {
 
    


    try {
   

        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(local);
        await queryRunner.manager.save(extintor_p);
        await queryRunner.manager.save(extintor_local);

        await queryRunner.commitTransaction();
    } catch (error) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    // await extintor_local.save();
    // await extintor_p.save();
    //await local.save();

    return res.json([extintor_p,local,extintor_local]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

