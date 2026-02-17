import { Response, Request } from "express";
import { Pisos } from "../entities/pisos";
import { Plafones } from "../entities/plafones";
import { Tanque_gas } from "../entities/tanque_gas";
import { Techos } from "../entities/techos";


export const createTanque_gas = async (req: Request, res: Response) => {
  try {
    const { cap_tanque,ubic_tanque,aterramiento_tanqueGas} = req.body;

    const tanque_gas = new Tanque_gas();
    tanque_gas.cap_tanque=cap_tanque,
    tanque_gas.ubic_tanque=ubic_tanque,
    tanque_gas.aterramiento_tanqueGas=aterramiento_tanqueGas;
 


    await tanque_gas.save();

    return res.json(tanque_gas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getTanques_gas = async (req: Request, res: Response) => {
  try {
    const tanque_gas = await Tanque_gas.find();

    return res.json(tanque_gas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateTanque_gas = async (req: Request, res: Response) => {
  const { id } = req.params;

  const tanque_gas = await Tanque_gas.findOneBy({ id: parseInt(id) });
  console.log(tanque_gas);

  if (!tanque_gas)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Tanque_gas.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteTanque_gas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Tanque_gas.delete({ id: parseInt(id) });

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