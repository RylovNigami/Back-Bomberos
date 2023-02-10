import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Cargo } from "../entities/cargo";
import { Departamento } from "../entities/departamento";
import { Huella } from "../entities/huella";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createHuella = async (req: Request, res: Response) => {
  try {
    const {  nombre_huella} = req.body;

    const huella = new Huella();
    huella.nombre_huella = nombre_huella;
 


    await huella.save();

    return res.json(huella);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getHuella = async (req: Request, res: Response) => {
  try {
    const huella = await Huella.find();

    return res.json(huella);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateHuella = async (req: Request, res: Response) => {
  const { id } = req.params;

  const huella = await Huella.findOneBy({ id: parseInt(id) });
  console.log(huella);

  if (!huella)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Huella.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteHuella = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Huella.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: "cargo not found" });
    }

    return res.status(201).json({ message: "Se ha borrado exitosamente" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
