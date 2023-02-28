import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Cargo } from "../entities/cargo";
import { Departamento } from "../entities/departamento";
import { Difusores } from "../entities/difusores";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createDifusores = async (req: Request, res: Response) => {
  try {
    const {difusores_condicion, cubren_areaDifusor  } = req.body;

    const difusores = new Difusores();
    difusores.difusores_condicion=difusores_condicion,
    difusores.cubren_areaDifusor=cubren_areaDifusor;
 


    await difusores.save();

    return res.json(difusores);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getDifusores = async (req: Request, res: Response) => {
  try {
    const difusores = await Difusores.find();

    return res.json(difusores);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateDifusores = async (req: Request, res: Response) => {
  const { id } = req.params;

  const difusores = await Difusores.findOneBy({ id: parseInt(id) });
  console.log(difusores);

  if (!difusores)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Difusores.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteDifusores = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Difusores.delete({ id: parseInt(id) });

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
