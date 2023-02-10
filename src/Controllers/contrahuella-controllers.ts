import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Cargo } from "../entities/cargo";
import { Contrahuella } from "../entities/contrahuella";
import { Departamento } from "../entities/departamento";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createContrahuella = async (req: Request, res: Response) => {
  try {
    const { nombre_contrahuella} = req.body;

    const contrahuella = new Contrahuella();
    contrahuella.nombre_contrahuella = nombre_contrahuella;
 


    await contrahuella.save();

    return res.json(contrahuella);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getContrahuella = async (req: Request, res: Response) => {
  try {
    const contrahuella = await Contrahuella.find();

    return res.json(contrahuella);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateContrahuella = async (req: Request, res: Response) => {
  const { id } = req.params;

  const contrahuella = await Contrahuella.findOneBy({ id: parseInt(id) });
  console.log(contrahuella);

  if (!contrahuella)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Contrahuella.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteContrahuella = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Contrahuella.delete({ id: parseInt(id) });

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
