import { Response, Request } from "express";
import { Inspeccion } from "../entities/inspeccion";
import { Local } from "../entities/local";
import { Person } from "../entities/person";


export const createInspeccion = async (req: Request, res: Response) => {
  try {
    const { nro_inspeccion,hora,fecha, local } = req.body;

    const inspeccion = new Inspeccion();
    inspeccion.nro_inspeccion=nro_inspeccion,
    inspeccion.hora=hora,
    inspeccion.fecha=fecha,
    inspeccion.local=local;

 

    const validar_local = await Local.findOne({where:{id:local}});



    if(!validar_local){
      return res.status(500).json({ message: "no se encontro el local"});
    }




    await inspeccion.save();

    console.log(inspeccion);

    return res.json(inspeccion);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getInspeccion = async (req: Request, res: Response) => {
  try {
    const inspeccion = await Inspeccion.find({relations:{local:true}});

    return res.json(inspeccion);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateInspeccion = async (req: Request, res: Response) => {
  const { id } = req.params;

  const inspeccion = await Inspeccion.findOneBy({ id: parseInt(req.params.id) });
  console.log(inspeccion);

  if (!inspeccion)
    return res.status(404).json({ message: " does not exists" });

  await Inspeccion.update({ id: parseInt(id) }, req.body);

  return res.sendStatus(204);
};

export const deleteInspeccion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Inspeccion.delete({ id: parseInt(id) });

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
