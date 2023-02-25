import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Local } from "../entities/local";
import { Medios_escape } from "../entities/medios_escape";
import { Medios_local } from "../entities/medios_local";
import { condicionvenEnum } from "../enum/condicionVen";



export const create = async (req: Request, res: Response) => {
  try {
    const { rif,firma_mercantil,ubicacion, vias_escape,ventilacion,condicion_ven,tipo_ven,cinta_anti,sitio_cinta,iluminacion,tipo_lampara,
    cantidad_lampara,señalizacion,tipo_señal,pasillo,nro_pasillo,ancho_pasillo,rampa,angulo_rampa,escalera_vias,ancho_escalera,altura_pasamano,
    altura_contrahuella,ancho_huella,tipo_puerta,sentido_salida,observacion } = req.body;

    const queryRunner = AppDataSource.createQueryRunner();
    queryRunner.connect();
    await  queryRunner.startTransaction()

    const local = new Local ();
    local.rif=rif;
    local.firma_mercantil=firma_mercantil;
    local.ubicacion=ubicacion;
    

    const medios_escape = new Medios_escape ();
   medios_escape.vias_escape=vias_escape;
   medios_escape.ventilacion=ventilacion;
   medios_escape.condicion_ven=condicion_ven;
   medios_escape.tipo_ven=tipo_ven;
   medios_escape.cinta_anti=cinta_anti;
   medios_escape.sitio_cinta=sitio_cinta;
   medios_escape.iluminacion=iluminacion;
   medios_escape.tipo_lampara=tipo_lampara;
   medios_escape.cantidad_lampara=cantidad_lampara;
   medios_escape.señalizacion=señalizacion;
   medios_escape.tipo_señal=tipo_señal;
   medios_escape.pasillo=pasillo;
   medios_escape.ancho_pasillo=ancho_pasillo;
   medios_escape.nro_pasillo=nro_pasillo;
   medios_escape.rampa=rampa;
   medios_escape.angulo_rampa=angulo_rampa;

    const medios_local = new Medios_local ();
    medios_local.escalera_vias=escalera_vias;
    medios_local.ancho_escalera=ancho_escalera;
    medios_local.altura_pasamano=altura_pasamano;
    medios_local.ancho_huella=ancho_huella;
    medios_local.altura_contrahuella=altura_contrahuella;
    medios_local.tipo_puerta=tipo_puerta;
    medios_local.sentido_salida=sentido_salida;
    medios_local.observacion=observacion;
    medios_local.local=local;
    medios_local.medios_escape=medios_escape;

 

    try {
        await queryRunner.manager.save(local);

        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(medios_escape);
        await queryRunner.manager.save(medios_local);
    

        await queryRunner.commitTransaction();
    } catch (error) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    // await person.save();
    // await rango.save();
    // await bombero.save();

    return res.json([local,medios_escape,medios_local]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

