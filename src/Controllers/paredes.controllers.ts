import { Response, Request } from "express";

import { Departamento } from "../entities/departamento";
import { Huella } from "../entities/huella";
import { Paredes } from "../entities/paredes";


export const createParedes = async (req: Request, res: Response) => {
  try {
    const { nombre_paredes,local } = req.body;

    const paredes = new Paredes();
    paredes.nombre_paredes=nombre_paredes;          
    paredes.local=local;       
 


    await paredes.save();

    return res.json(paredes);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getParedes = async (req: Request, res: Response) => {
  try {
    const paredes = await Paredes.find();

    return res.json(paredes);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateParedes = async (req: Request, res: Response) => {
  const { id } = req.params;

  const paredes = await Paredes.findOneBy({ id: parseInt(id) });
  console.log(paredes);

  if (!paredes)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Paredes.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteParedes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Paredes.delete({ id: parseInt(id) });

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
