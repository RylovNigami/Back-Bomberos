import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Departamento } from "../entities/departamento";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createDepartamento = async (req: Request, res: Response) => {
  try {
    const {  nombre_dep} = req.body;

    const departamento = new Departamento();
    departamento.nombre_dep = nombre_dep;
 


    await departamento.save();

    return res.json(departamento);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getDepartamento = async (req: Request, res: Response) => {
  try {
    const departamento = await Departamento.find();

    return res.json(departamento);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateDepartamento = async (req: Request, res: Response) => {
  const { id } = req.params;

  const departamento = await Departamento.findOneBy({ id: parseInt(id) });
  console.log(departamento);

  if (!departamento)
    return res.status(404).json({ message: "departamento does not exists" });

 const update =  await Departamento.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteDepartamengo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Departamento.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: "departamento not found" });
    }

    return res.status(201).json({ message: "Se ha borrado exitosamente" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
