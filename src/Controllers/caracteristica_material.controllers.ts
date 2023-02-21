import { Response, Request } from "express";
import { AppDataSource } from "../db";
import { Bombero } from "../entities/bombero";
import { Caracteristica_local } from "../entities/caracteristica_local";
import { Contrahuella } from "../entities/contrahuella";
import { Escaleras } from "../entities/escaleras";
import { Huella } from "../entities/huella";
import { Local } from "../entities/local";
import { Paredes } from "../entities/paredes";
import { Pasamanos } from "../entities/pasamanos";
import { Person } from "../entities/person";
import { Pisos } from "../entities/pisos";
import { Plafones } from "../entities/plafones";
import { Puertas } from "../entities/puertas";
import { Rango } from "../entities/rango";
import { Techos } from "../entities/techos";
import { Ventanas } from "../entities/ventanas";


export const create = async (req: Request, res: Response) => {
  try {
    const { area,nro_niveles,nivel_inmueble,nombre_escaleras,nombre_contrahuella,nombre_huella, nombre_paredes, 
        nombre_pasamanos, nombre_pisos, nombre_plafones, nombre_puertas,resistencia, nombre_techos, nombre_ventanas,rif,firma_mercantil,ubicacion} = req.body;

    const queryRunner = AppDataSource.createQueryRunner();
    queryRunner.connect();
    queryRunner.startTransaction()

    const caracterisca_local = new Caracteristica_local ();

    caracterisca_local.area=area,
    caracterisca_local.nro_niveles=nro_niveles,
    caracterisca_local.nivel_inmueble=nivel_inmueble;

    const escaleras = new Escaleras ();
    escaleras.nombre_escaleras=nombre_escaleras;

    const contrahuella = new Contrahuella ();
    contrahuella.nombre_contrahuella=nombre_contrahuella;

    const huella = new Huella ();
    huella.nombre_huella=nombre_huella;

    const paredes = new Paredes ();
    paredes.nombre_paredes=nombre_paredes;

    const pasamanos = new Pasamanos ();
    pasamanos.nombre_pasamanos=nombre_pasamanos;

    const pisos = new Pisos ();
    pisos.nombre_pisos=nombre_pisos;

    const plafones = new Plafones ();
    plafones.nombre_plafones=nombre_plafones;

    const puertas = new Puertas ();
    puertas.nombre_puertas=nombre_puertas,
    puertas.resistencia=resistencia;

    const techos = new Techos ();
    techos.nombre_techos=nombre_techos;

    const ventanas = new Ventanas ();
    ventanas.nombre_ventanas=nombre_ventanas;

    const local = new Local ();
     local.rif=rif,
     local.firma_mercantil=firma_mercantil,
     local.ubicacion=ubicacion;


    try {
        await queryRunner.manager.save(caracterisca_local);

        //throw new Error("eokfzdmomsz");
        await queryRunner.manager.save(escaleras);
        await queryRunner.manager.save(huella);
        await queryRunner.manager.save(contrahuella);
        await queryRunner.manager.save(paredes);
        await queryRunner.manager.save(pasamanos);
        await queryRunner.manager.save(pisos);
        await queryRunner.manager.save(plafones);
        await queryRunner.manager.save(puertas);
        await queryRunner.manager.save(techos);
        await queryRunner.manager.save(ventanas);
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

    return res.json([caracterisca_local,escaleras,huella,contrahuella,paredes,pasamanos,pisos,plafones,puertas,techos,ventanas,local]);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
