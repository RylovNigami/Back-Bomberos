import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Company } from "../entities/company";
import { Extintor_local } from "../entities/extintor_local";
import { Extintor_p } from "../entities/extintor_p";
import { Local } from "../entities/local";


export const create = async (req: Request, res: Response) => {
  
  const { operativo_extintorPortatil,capacidad_extintorPortatil,reubicacion_extintorPortatil,companyName,reubicacion,
    rif,firma_mercantil,ubicacion,posee_extintoresPortatil,nro_requiereExtintor,requiere_extintorPortatil,tipo_agenteExtintor} = req.body;

const queryRunner = AppDataSource.createQueryRunner();
await queryRunner.connect();
await queryRunner.startTransaction()

const local = new Local ();
local.rif=rif;
local.firma_mercantil=firma_mercantil;
local.ubicacion=ubicacion;

const extintor_p = new Extintor_p ();
extintor_p.posee_extintoresPortatil=posee_extintoresPortatil;
extintor_p.nro_requiereExtintor=nro_requiereExtintor;
extintor_p.requiere_extintorPortatil=requiere_extintorPortatil;
extintor_p.tipo_agenteExtintor=tipo_agenteExtintor;

const company = new Company ();
company.companyName=companyName;

const extintor_local = new Extintor_local ();
extintor_local.operativo_extintorPortatil=operativo_extintorPortatil,
extintor_local.capacidad_extintorPortatil=capacidad_extintorPortatil;
extintor_local.operativo_extintorPortatil=operativo_extintorPortatil;
extintor_local.reubicacion_extintorPortatil=reubicacion_extintorPortatil;
extintor_local.extintor_p=extintor_p;
extintor_local.local=local;
extintor_local.company=company;


  try {
 
    


    try {
   

        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(local);
        await queryRunner.manager.save(extintor_p);
        await queryRunner.manager.save(company);
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

    return res.json([extintor_p,local,company,extintor_local]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

