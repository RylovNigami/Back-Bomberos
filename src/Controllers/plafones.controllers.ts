import { Response, Request } from "express";
import { Pisos } from "../entities/pisos";
import { Plafones } from "../entities/plafones";


export const createPlafones = async (req: Request, res: Response) => {
  try {
    const { nombre_plafones } = req.body;

    const plafones = new Plafones();
    plafones.nombre_plafones=nombre_plafones;           
 


    await plafones.save();

    return res.json(plafones);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getPlafones = async (req: Request, res: Response) => {
  try {
    const plafones = await Plafones.find();

    return res.json(plafones);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updatePlafones = async (req: Request, res: Response) => {
  const { id } = req.params;

  const plafones = await Plafones.findOneBy({ id: parseInt(id) });
  console.log(plafones);

  if (!plafones)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Plafones.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deletePlafones = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Plafones.delete({ id: parseInt(id) });

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
