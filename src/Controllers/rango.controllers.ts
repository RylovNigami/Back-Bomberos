import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createRango = async (req: Request, res: Response) => {
  try {
    const {  nombre_rango} = req.body;

    const rango = new Rango();
    rango.nombre_rango = nombre_rango;
 


    await rango.save();

    return res.json(rango);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getRango = async (req: Request, res: Response) => {
  try {
    const rango = await Rango.find();

    return res.json(rango);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateRango = async (req: Request, res: Response) => {
  const { id } = req.params;

  const rango = await Rango.findOneBy({ id: parseInt(id) });
  console.log(rango);

  if (!rango)
    return res.status(404).json({ message: "rango does not exists" });

 const update =  await Rango.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteRango = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Rango.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: "rango not found" });
    }

    return res.status(201).json({ message: "Se ha borrado exitosamente" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
