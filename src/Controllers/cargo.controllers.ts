import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Cargo } from "../entities/cargo";
import { Departamento } from "../entities/departamento";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createCargo = async (req: Request, res: Response) => {
  try {
    const {  nombre_cargo} = req.body;

    const cargo = new Cargo();
    cargo.nombre_cargo = nombre_cargo;
 


    await cargo.save();

    return res.json(cargo);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getCargo = async (req: Request, res: Response) => {
  try {
    const cargo = await Cargo.find();

    return res.json(cargo);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateCargo = async (req: Request, res: Response) => {
  const { id } = req.params;

  const cargo = await Cargo.findOneBy({ id: parseInt(id) });
  console.log(cargo);

  if (!cargo)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Cargo.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteCargo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Cargo.delete({ id: parseInt(id) });

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
