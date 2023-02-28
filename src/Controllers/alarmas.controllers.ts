import { Response, Request } from "express";
import { Alarmas } from "../entities/alarmas";

import { Departamento } from "../entities/departamento";
import { Huella } from "../entities/huella";
import { Paredes } from "../entities/paredes";


export const createAlarmas = async (req: Request, res: Response) => {
  try {
    const { sistema_alarma,sistema_deteccion,condiciones_alarmas,tipo_deteccion,nro_zonaAlarma,area_protegerDeteccion,calor,humo_i,humo_f,
    combinado,detectores_area,brand,local,estacion_manual,difusores} = req.body;

    const alarmas = new Alarmas();
   alarmas.sistema_alarma=sistema_alarma,
   alarmas.sistema_deteccion=sistema_deteccion,
   alarmas.condiciones_alarmas=condiciones_alarmas,
   alarmas.tipo_deteccion=tipo_deteccion,
   alarmas.nro_zonaAlarma=nro_zonaAlarma,
   alarmas.area_protegerDeteccion=area_protegerDeteccion,
   alarmas.calor=calor,
   alarmas.humo_i=humo_i,
   alarmas.humo_f=humo_f,
   alarmas.combinado=combinado,
   alarmas.detectores_area=detectores_area,
    alarmas.brand=brand;
    alarmas.local=local;
    alarmas.estacion_manual=estacion_manual;
    alarmas.difusores=difusores;


 


    await alarmas.save();

    return res.json(alarmas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getAlarmas = async (req: Request, res: Response) => {
  try {
    const alarmas = await Alarmas.find();

    return res.json(alarmas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateAlarmas = async (req: Request, res: Response) => {
  const { id } = req.params;

  const alarmas = await Alarmas.findOneBy({ id: parseInt(id) });
  console.log(alarmas);

  if (!alarmas)
    return res.status(404).json({ message: "cargo does not exists" });

// const update =  await alarmas.update({ id: parseInt(id) }, req.body);

 /// return res.json(update);
};

export const deleteAlarmas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Alarmas.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: " not found" });
    }

    return res.status(201).json({ message: "Se ha borrado exitosamente" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
