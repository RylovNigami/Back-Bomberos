import { Response, Request } from "express";
import { Departamento } from "../entities/departamento";
import { Electricidad } from "../entities/electricidad";
import { Medios_escape } from "../entities/medios_escape";
import { Medios_local } from "../entities/medios_local";


export const createMedios_local = async (req: Request, res: Response) => {
  try {
    const {  escalera_vias,ancho_escalera,altura_pasamano,altura_contrahuella,ancho_huella,tipo_puertaviasEscape,condicion_escaleras,tipo_escaleras,sentido_salida,observacion_viasEscape,local,medios_escape} = req.body;

    const medios_local= new Medios_local();
   
    

    



    await medios_local.save();

    return res.json(medios_local);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getMedios_local = async (req: Request, res: Response) => {
  try {
    const medios_local = await Medios_local.find();

    return res.json(medios_local);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateMedios_local = async (req: Request, res: Response) => {
  const { id } = req.params;

  const medios_local = await Medios_local.findOneBy({ id: parseInt(id) });
  console.log(medios_local);

  if (!medios_local)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Medios_local.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteMedios_local = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Medios_local.delete({ id: parseInt(id) });

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
