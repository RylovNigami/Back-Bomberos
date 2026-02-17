import { Response, Request } from "express";

import { Departamento } from "../entities/departamento";
import { Huella } from "../entities/huella";
import { Paredes } from "../entities/paredes";
import { Pasamanos } from "../entities/pasamanos";
import { Pisos } from "../entities/pisos";
import { Puertas } from "../entities/puertas";
import { Puertas_vias } from "../entities/puertas_vias";


export const createPuertas_vias = async (req: Request, res: Response) => {
  try {
    const { tipo_puertaviasEscape,sentido_salida,observacion_viasEscape,medios_escape } = req.body;

    const puertas_vias = new Puertas_vias();
    puertas_vias.tipo_puertaviasEscape=tipo_puertaviasEscape;
    puertas_vias.sentido_salida=sentido_salida;
    puertas_vias.observacion_viasEscape=observacion_viasEscape;
    puertas_vias.medios_escape=medios_escape;


    await puertas_vias.save();

    return res.json(puertas_vias);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getPuertas_vias = async (req: Request, res: Response) => {
  try {
    const puertas_vias = await Puertas_vias.find();

    return res.json(puertas_vias);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updatePuertas_vias = async (req: Request, res: Response) => {
  const { id } = req.params;

  const puertas_vias = await Puertas_vias.findOneBy({ id: parseInt(id) });
  console.log(puertas_vias);

  if (!puertas_vias)
    return res.status(404).json({ message: " does not exists" });

/* const update =  await puertas_vias.update({ id: parseInt(id) }, req.body);

  return res.json(update);*/
};

export const deletePuertas_vias = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Puertas_vias.delete({ id: parseInt(id) });

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
