import { Response, Request } from "express";

import { Departamento } from "../entities/departamento";
import { Huella } from "../entities/huella";
import { Paredes } from "../entities/paredes";
import { Pasamanos } from "../entities/pasamanos";


export const createPasamanos = async (req: Request, res: Response) => {
  try {
    const { nombre_pasamanos,local } = req.body;

    const pasamanos = new Pasamanos();
    pasamanos.nombre_pasamanos=nombre_pasamanos;  
    pasamanos.local=local;            
 


    await pasamanos.save();

    return res.json(pasamanos);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getPasamanos = async (req: Request, res: Response) => {
  try {
    const pasamanos = await Pasamanos.find();

    return res.json(pasamanos);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updatePasamanos = async (req: Request, res: Response) => {
  const { id } = req.params;

  const pasamanos = await Pasamanos.findOneBy({ id: parseInt(id) });
  console.log(pasamanos);

  if (!pasamanos)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Pasamanos.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deletePasamanos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Pasamanos.delete({ id: parseInt(id) });

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
