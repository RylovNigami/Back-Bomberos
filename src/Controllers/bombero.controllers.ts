import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";

export const createBombero = async (req: Request, res: Response) => {
  try {
    const { rango, ordenGeneral, status } = req.body;

    const bombero = new Bombero();

    bombero.rango = rango;
    bombero.ordenGeneral = ordenGeneral;
    bombero.status = status;

    await bombero.save();

    console.log(bombero);

    return res.json(bombero);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getBombero = async (req: Request, res: Response) => {
  try {
    const bombero = await Bombero.find();

    return res.json(getBombero);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateBombero = async (req: Request, res: Response) => {
  const { id } = req.params;

  const bombero = await Bombero.findOneBy({ id: parseInt(req.params.id) });
  console.log(bombero);

  if (!bombero)
    return res.status(404).json({ message: "firemen does not exists" });

  await Bombero.update({ id: parseInt(id) }, req.body);

  return res.sendStatus(204);
};

export const deleteBombero = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Bombero.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: "person not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
