import { Response, Request } from "express";
import { Agente_extinguidor } from "../entities/agente_extinguidor";
import { Bombero } from "../entities/bombero";
import { Cargo } from "../entities/cargo";
import { Departamento } from "../entities/departamento";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createAgente_extinguidor = async (req: Request, res: Response) => {
  try {
    const {  nombre_agenteExtinguidor} = req.body;

    const agente_extinguidor = new Agente_extinguidor();
    agente_extinguidor.nombre_agenteExtinguidor=nombre_agenteExtinguidor;
    
 


    await agente_extinguidor.save();

    return res.json(agente_extinguidor);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getAgente_extinguidor = async (req: Request, res: Response) => {
  try {
    const agente_extinguidor = await Agente_extinguidor.find();

    return res.json(agente_extinguidor);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateAgente_extinguidor = async (req: Request, res: Response) => {
  const { id } = req.params;

  const agente_extinguidor = await Agente_extinguidor.findOneBy({ id: parseInt(id) });
  console.log(agente_extinguidor);

  if (!agente_extinguidor)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Agente_extinguidor.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteAgente_extinguidor = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Agente_extinguidor.delete({ id: parseInt(id) });

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
