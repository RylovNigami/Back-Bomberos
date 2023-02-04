import { Response, Request } from "express";
import { Departamento } from "../entities/departamento";
import { Electricidad } from "../entities/electricidad";


export const createElectricidad = async (req: Request, res: Response) => {
  try {
    const {  tension,material_tablero,señalizacion,ventilacion,tipo_ven,tipo_interruptor} = req.body;

    const electricidad = new Electricidad();
   electricidad.tension=tension,
   electricidad.material_tablero=material_tablero,
   electricidad.señalizacion=señalizacion,
   electricidad.ventilacion=ventilacion,
   electricidad.tipo_ven=tipo_ven,
   electricidad.tipo_interruptor=tipo_interruptor,
 


    await electricidad.save();

    return res.json(electricidad);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getElectricidad= async (req: Request, res: Response) => {
  try {
    const electricidad = await Electricidad.find();

    return res.json(electricidad);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateElectricidad = async (req: Request, res: Response) => {
  const { id } = req.params;

  const electricidad= await Electricidad.findOneBy({ id: parseInt(id) });
  console.log(electricidad);

  if (!electricidad)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Electricidad.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteElectricidad = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Electricidad.delete({ id: parseInt(id) });

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
