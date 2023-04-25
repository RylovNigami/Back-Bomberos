import { Response, Request } from "express";
import { Departamento } from "../entities/departamento";
import { Electricidad } from "../entities/electricidad";


export const createElectricidad = async (req: Request, res: Response) => {
  try {
    const {  tension_tablero,material_tablero,canalizados_tablero,señalizacion_tablero,ubic_tablero,ventilacion_tablero,
      tipo_venTablero,tipo_interruptorTablero,requiere_tablero,local} = req.body;

    const electricidad = new Electricidad();
   electricidad.tension_tablero=tension_tablero,
   electricidad.material_tablero=material_tablero,
   electricidad.señalizacion_tablero=señalizacion_tablero,
   electricidad.canalizados_tablero=canalizados_tablero,
   electricidad.ubic_tablero=ubic_tablero,
   electricidad.ventilacion_tablero=ventilacion_tablero,
   electricidad.tipo_venTablero=tipo_venTablero,
   electricidad.tipo_interruptorTablero=tipo_interruptorTablero,
   electricidad.requiere_tablero=requiere_tablero,
   electricidad.local=local;
 


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
