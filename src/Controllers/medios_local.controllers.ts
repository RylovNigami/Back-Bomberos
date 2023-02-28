import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Local } from "../entities/local";
import { Medios_escape } from "../entities/medios_escape";
import { Medios_local } from "../entities/medios_local";
import { condicionvenEnum } from "../enum/condicionVen";



export const create = async (req: Request, res: Response) => {
  try {
    const { rif,firma_mercantil,ubicacion, vias_escape,ventilacion_viasEscape,condicion_venviasEscape,tipo_venviasEscape,cinta_antirresbalante,
      sitio_cintaAntirresbalante,iluminacion_emergencia,tipo_lamparaEmergencia,cantidad_lamparaEmergencia,señalizacion_viasEscape,tipo_señalviasEscape,
      pasillo_viasEscape,nro_pasilloviasEscape,ancho_pasilloviasEscape,
      rampa_viasEscape,angulo_rampaEscape,escalera_vias,ancho_escalera,altura_pasamano,
    altura_contrahuella,ancho_huella,tipo_puertaviasEscape,sentido_salida,observacion_viasEscape,condicion_escaleras,tipo_escaleras } = req.body;

    const queryRunner = AppDataSource.createQueryRunner();
    queryRunner.connect();
    await  queryRunner.startTransaction()

    const local = new Local ();
    local.rif=rif;
    local.firma_mercantil=firma_mercantil;
    local.ubicacion=ubicacion;
    

    const medios_escape = new Medios_escape ();
    medios_escape.vias_escape=vias_escape,
    medios_escape.ventilacion_viasEscape=ventilacion_viasEscape,
    medios_escape.condicion_venviasEscape=condicion_venviasEscape,
    medios_escape.tipo_venviasEscape=tipo_venviasEscape
    medios_escape.cinta_antirresbalante=cinta_antirresbalante,
    medios_escape.sitio_cintaAntirresbalante=sitio_cintaAntirresbalante,
    medios_escape.iluminacion_emergencia=iluminacion_emergencia,
    medios_escape.tipo_lamparaEmergencia=tipo_lamparaEmergencia,
    medios_escape.cantidad_lamparaEmergencia=cantidad_lamparaEmergencia,
    medios_escape.señalizacion_viasEscape=señalizacion_viasEscape,
    medios_escape.tipo_señalviasEscape=tipo_señalviasEscape,
    medios_escape.pasillo_viasEscape=pasillo_viasEscape,
    medios_escape.nro_pasilloviasEscape=nro_pasilloviasEscape,
    medios_escape.ancho_pasilloviasEscape=ancho_pasilloviasEscape,
    medios_escape.rampa_viasEscape=rampa_viasEscape,
    medios_escape.angulo_rampaEscape=angulo_rampaEscape;
    

    
 

 

    try {
        await queryRunner.manager.save(local);

        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(medios_escape);
    

        await queryRunner.commitTransaction();
    } catch (error) {
        await queryRunner.rollbackTransaction();
    } finally {
        await queryRunner.release();
    }

    // await person.save();
    // await rango.save();
    // await bombero.save();

    return res.json([local,medios_escape]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

