import { Response, Request } from "express";
import { Solitude } from "../entities/solitude";

export const createSolitude = async (req: Request, res: Response) => {
  try {
    const {  solitudeFirstName, solitudeLastName, dniSolitude,local } = req.body;

    const solitude = new Solitude();
   solitude.solitudeFirstName=solitudeFirstName,
   solitude.solitudeLastName=solitudeLastName,
   solitude.dniSolitude=dniSolitude,
   solitude.local=local;

    await solitude.save();

    return res.json(solitude);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getSolitude = async (req: Request, res: Response) => {
  try {
    const solitude = await Solitude.find();

    return res.json(solitude);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateSolitude = async (req: Request, res: Response) => {
  const { id } = req.params;

  const solitude = await Solitude.findOneBy({ id: parseInt(id) });
  console.log(solitude);

  if (!solitude)
    return res.status(404).json({ message: "person does not exists" });

  await Solitude.update({ id: parseInt(id) }, req.body);

  return res.sendStatus(204);
};

export const deleteSolitude = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Solitude.delete({ id: parseInt(id) });

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
