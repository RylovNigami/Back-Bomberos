import { Response, Request } from "express";
import { Departamento } from "../entities/departamento";
import { Electricidad } from "../entities/electricidad";
import { Escaleras } from "../entities/escaleras";
import { Escaleras_vias } from "../entities/escaleras_vias";


export const createEscaleras_vias = async (req: Request, res: Response) => {
  try {
    const { condicion_escaleras,tipo_escaleras,ancho_escalera,ancho_huella,altura_pasamano,altura_contrahuella,medios_escape} = req.body;

    const escaleras_vias = new Escaleras_vias();
    escaleras_vias.condicion_escaleras=condicion_escaleras,
    escaleras_vias.tipo_escaleras=tipo_escaleras;
    escaleras_vias.ancho_escalera=ancho_escalera;
    escaleras_vias.altura_pasamano=altura_pasamano;
    escaleras_vias.ancho_huella=ancho_huella;
    escaleras_vias.altura_contrahuella=altura_contrahuella;
    escaleras_vias.medios_escape=medios_escape;
    
    await escaleras_vias.save();

    return res.json(escaleras_vias);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getEscaleras_vias= async (req: Request, res: Response) => {
  try {
    const escaleras_vias = await Escaleras_vias.find();

    return res.json(escaleras_vias);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateEscaleras_vias = async (req: Request, res: Response) => {
  const { id } = req.params;

  const escaleras_vias= await Escaleras_vias.findOneBy({ id: parseInt(id) });
  console.log(escaleras_vias);

  if (!escaleras_vias)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Escaleras_vias.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteEscaleras_vias = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Escaleras_vias.delete({ id: parseInt(id) });

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
