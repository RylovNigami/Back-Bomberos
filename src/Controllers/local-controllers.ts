import { Response, Request } from "express";
import { Interviewer } from "../entities/interviewer";
import { Local } from "../entities/local";
import { Parroquia } from "../entities/parroquia";
import { Person } from "../entities/person";


export const createLocal = async (req: Request, res: Response) => {
  try {
    const { rif,firma_mercantil,ubicacion,ocupacion,interviewer,localOwner,solitude,parroquia } = req.body;

    const local = new Local();
     local.rif=rif,
     local.firma_mercantil=firma_mercantil,
     local.ubicacion=ubicacion,
     local.ocupacion=ocupacion,
     local.parroquia=parroquia,
     local.interviewer=interviewer,
     local.localOwner=localOwner,
     local.solitude=solitude;

    await local.save();

    return res.json(local);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getLocal = async (req: Request, res: Response) => {
  try {
    const local = await Local.find();

    return res.json(local);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateLocal = async (req: Request, res: Response) => {
  const { id } = req.params;

  const local = await Local.findOneBy({ id: parseInt(id) });
  console.log(local);

  if (!local)
    return res.status(404).json({ message: "does not exists" });

 const update =  await Local.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteLocal = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Local.delete({ id: parseInt(id) });

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
