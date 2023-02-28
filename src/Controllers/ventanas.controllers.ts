import { Response, Request } from "express";
import { Pisos } from "../entities/pisos";
import { Plafones } from "../entities/plafones";
import { Techos } from "../entities/techos";
import { Ventanas } from "../entities/ventanas";


export const createVentanas = async (req: Request, res: Response) => {
  try {
    const { nombre_ventanas,local } = req.body;

    const ventanas = new Ventanas();
    ventanas.nombre_ventanas=nombre_ventanas;  
    ventanas.local=local;    
 


    await ventanas.save();

    return res.json(ventanas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getVentanas = async (req: Request, res: Response) => {
  try {
    const ventanas = await Ventanas.find();

    return res.json(ventanas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateVentanas = async (req: Request, res: Response) => {
  const { id } = req.params;

  const ventanas = await Ventanas.findOneBy({ id: parseInt(id) });
  console.log(ventanas);

  if (!ventanas)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Ventanas.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteVentanas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Ventanas.delete({ id: parseInt(id) });

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