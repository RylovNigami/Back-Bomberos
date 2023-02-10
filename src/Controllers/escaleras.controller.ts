import { Response, Request } from "express";
import { Departamento } from "../entities/departamento";
import { Electricidad } from "../entities/electricidad";
import { Escaleras } from "../entities/escaleras";


export const createEscaleras = async (req: Request, res: Response) => {
  try {
    const {  nombre_escaleras} = req.body;

    const escaleras = new Escaleras();

 


    await escaleras.save();

    return res.json(escaleras);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getEscaleras= async (req: Request, res: Response) => {
  try {
    const escaleras = await Escaleras.find();

    return res.json(escaleras);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateEscaleras = async (req: Request, res: Response) => {
  const { id } = req.params;

  const escaleras= await Escaleras.findOneBy({ id: parseInt(id) });
  console.log(escaleras);

  if (!escaleras)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Escaleras.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteEscaleras = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Escaleras.delete({ id: parseInt(id) });

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
