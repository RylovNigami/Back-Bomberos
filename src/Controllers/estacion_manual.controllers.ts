import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Cargo } from "../entities/cargo";
import { Departamento } from "../entities/departamento";
import { Difusores } from "../entities/difusores";
import { Estacion_manual } from "../entities/estacion_manual";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createEstacion_manual = async (req: Request, res: Response) => {
  try {
    const {  estacion_clase,estacion_condicion } = req.body;

    const estacion_manual = new Estacion_manual();
    estacion_manual.estacion_clase=estacion_clase,
    estacion_manual.estacion_condicion;

 


    await estacion_manual.save();

    return res.json(estacion_manual);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getEstacion_manual = async (req: Request, res: Response) => {
  try {
    const estacion_manual = await Estacion_manual.find();

    return res.json(estacion_manual);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateEstacion_manual = async (req: Request, res: Response) => {
  const { id } = req.params;

  const estacion_manual = await Estacion_manual.findOneBy({ id: parseInt(id) });
  console.log(estacion_manual);

  if (!estacion_manual)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Estacion_manual.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteEstacion_manual = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Estacion_manual.delete({ id: parseInt(id) });

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
