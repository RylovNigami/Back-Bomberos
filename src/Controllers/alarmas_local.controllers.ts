import { Response, Request } from "express";
import { Alarmas } from "../entities/alarmas";
import { Alarmas_local } from "../entities/alarmas_local";

import { Departamento } from "../entities/departamento";
import { Huella } from "../entities/huella";
import { Paredes } from "../entities/paredes";


export const createAlarmas_local = async (req: Request, res: Response) => {
  try {
    const { estacion,estacion_c,estacion_clase,difusores_c,difusores_s,cubren_a,local,alarmas} = req.body;

    const alarmas_local = new Alarmas_local();
   alarmas_local.estacion=estacion,
   alarmas_local.estacion_c=estacion_c,
   alarmas_local.estacion_clase=estacion_clase,
   alarmas_local.difusores_c=difusores_c,
   alarmas_local.difusores_s=difusores_s,
   alarmas_local.cubren_a=cubren_a,
   alarmas_local.alarmas=alarmas,
   alarmas_local.local=local;

 


    await alarmas_local.save();

    return res.json(alarmas_local);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getAlarmas_local = async (req: Request, res: Response) => {
  try {
    const alarmas_local = await Alarmas_local.find();

    return res.json(alarmas_local);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateAlarmas_local = async (req: Request, res: Response) => {
  const { id } = req.params;

  const alarmas_local = await Alarmas_local.findOneBy({ id: parseInt(id) });
  console.log(alarmas_local);

  if (!alarmas_local)
    return res.status(404).json({ message: " does not exists" });

//const update =  await alarmas_local.update({ id: parseInt(id) }, req.body);

 // return res.json(update);
};

export const deleteAlarmas_local = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Alarmas_local.delete({ id: parseInt(id) });

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