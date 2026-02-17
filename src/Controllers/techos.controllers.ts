import { Response, Request } from "express";
import { Pisos } from "../entities/pisos";
import { Plafones } from "../entities/plafones";
import { Techos } from "../entities/techos";


export const createTechos = async (req: Request, res: Response) => {
  try {
    const { nombre_techos,local } = req.body;

    const techos = new Techos();
    techos.nombre_techos=nombre_techos;   
    techos.local=local;       
 


    await techos.save();

    return res.json(techos);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getTechos = async (req: Request, res: Response) => {
  try {
    const techos = await Techos.find();

    return res.json(techos);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateTechos = async (req: Request, res: Response) => {
  const { id } = req.params;

  const techos = await Techos.findOneBy({ id: parseInt(id) });
  console.log(techos);

  if (!techos)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Techos.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteTechos = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Techos.delete({ id: parseInt(id) });

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