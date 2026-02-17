import { Response, Request } from "express";

import { Departamento } from "../entities/departamento";
import { Huella } from "../entities/huella";
import { Paredes } from "../entities/paredes";
import { Pasamanos } from "../entities/pasamanos";
import { Pisos } from "../entities/pisos";
import { Puertas } from "../entities/puertas";


export const createPuertas = async (req: Request, res: Response) => {
  try {
    const { nombre_puertas, resistencia,local } = req.body;

    const puertas = new Puertas();
    puertas.nombre_puertas=nombre_puertas;        
    puertas.resistencia=resistencia;
    puertas.local=local;


    await puertas.save();

    return res.json(puertas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getPuertas = async (req: Request, res: Response) => {
  try {
    const puertas = await Puertas.find();

    return res.json(puertas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updatePuertas = async (req: Request, res: Response) => {
  const { id } = req.params;

  const puertas = await Puertas.findOneBy({ id: parseInt(id) });
  console.log(puertas);

  if (!puertas)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Pisos.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deletePuertas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Puertas.delete({ id: parseInt(id) });

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
