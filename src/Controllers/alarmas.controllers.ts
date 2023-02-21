import { Response, Request } from "express";
import { Alarmas } from "../entities/alarmas";

import { Departamento } from "../entities/departamento";
import { Huella } from "../entities/huella";
import { Paredes } from "../entities/paredes";


export const createAlarmas = async (req: Request, res: Response) => {
  try {
    const { sistema_alarma, marca_alarma,sistema_deteccion,condiciones,tipo,numero_zona,area_proteger,calor,humo_i,humo_f,
    combinado,detectores_a,estacion,estacion_c,estacion_clase,difusores_c,difusores_s,cubren_a,local} = req.body;

    const alarmas = new Alarmas();
   alarmas.sistema_alarma=sistema_alarma,
   alarmas.marca_alarma=marca_alarma,
   alarmas.sistema_deteccion=sistema_deteccion,
   alarmas.condiciones=condiciones,
   alarmas.tipo=tipo,
   alarmas.numero_zona=numero_zona,
   alarmas.area_proteger=area_proteger,
   alarmas.calor=calor,
   alarmas.humo_i=humo_i,
   alarmas.humo_f=humo_f,
   alarmas.combinado=combinado,
   alarmas.detectores_a=detectores_a,
   alarmas.estacion=estacion,
   alarmas.estacion_c=estacion_c,
   alarmas.estacion_clase=estacion_clase,
   alarmas.difusores_c=difusores_c,
   alarmas.difusores_s=difusores_s,
   alarmas.cubren_a=cubren_a,
   alarmas.local=local;

 


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
