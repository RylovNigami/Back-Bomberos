import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Bombona_gas } from "../entities/bombona_gas";
import { Brand } from "../entities/brand";
import { Cargo } from "../entities/cargo";
import { Departamento } from "../entities/departamento";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createBombona_gas = async (req: Request, res: Response) => {
  try {
    const {cap_bombona,ubic_bombona,condicion_visualBombona,ventiladaBombona,protegidaBombona  } = req.body;

    const bombona_gas = new Bombona_gas();
   bombona_gas.cap_bombona=cap_bombona,
   bombona_gas.ubic_bombona=ubic_bombona,
   bombona_gas.condicion_visualBombona=condicion_visualBombona,
   bombona_gas.ventiladaBombona=ventiladaBombona,
   bombona_gas.protegidaBombona=protegidaBombona;
 


    await bombona_gas.save();

    return res.json(bombona_gas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getBombona_gas = async (req: Request, res: Response) => {
  try {
    const bombona_gas = await Bombona_gas.find();

    return res.json(bombona_gas);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateBombona_gas = async (req: Request, res: Response) => {
  const { id } = req.params;

  const bombona_gas = await Bombona_gas.findOneBy({ id: parseInt(id) });
  console.log(bombona_gas);

  if (!bombona_gas)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Bombona_gas.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteBombona_gas = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Bombona_gas.delete({ id: parseInt(id) });

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
