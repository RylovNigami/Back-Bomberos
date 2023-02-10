import { Response, Request } from "express";

import { Departamento } from "../entities/departamento";
import { Huella } from "../entities/huella";
import { Paredes } from "../entities/paredes";
import { Pasamanos } from "../entities/pasamanos";
import { Pisos } from "../entities/pisos";


export const createPisos = async (req: Request, res: Response) => {
  try {
    const { nombre_pisos } = req.body;

    const pisos = new Pisos();
    pisos.nombre_pisos=nombre_pisos;           
 


    await pisos.save();

    return res.json(pisos);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getPisos = async (req: Request, res: Response) => {
  try {
    const pisos = await Pasamanos.find();

    return res.json(pisos);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updatePisos = async (req: Request, res: Response) => {
  const { id } = req.params;

  const pisos = await Pisos.findOneBy({ id: parseInt(id) });
  console.log(pisos);

  if (!pisos)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Pisos.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deletePisos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Pisos.delete({ id: parseInt(id) });

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
