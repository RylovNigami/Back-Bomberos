import { Response, Request } from "express";
import { Departamento } from "../entities/departamento";
import { Electricidad } from "../entities/electricidad";
import { Medios_escape } from "../entities/medios_escape";


export const createMedios_escape = async (req: Request, res: Response) => {
  try {
    const {  vias_escape,ventilacion,condicion_ven,tipo_ven,cinta_anti,sitio_cinta,iluminacion,tipo_lampara,cantidad_lampara,señalizacion,tipo_señal,pasillo,nro_pasillo,ancho_pasillo,
        rampa,angulo_rampa} = req.body;

    const medios_escape= new Medios_escape();
    medios_escape.vias_escape=vias_escape,
    medios_escape.ventilacion=ventilacion,
    medios_escape.condicion_ven=condicion_ven,
    medios_escape.tipo_ven=tipo_ven,
    medios_escape.cinta_anti=cinta_anti,
    medios_escape.sitio_cinta=sitio_cinta,
    medios_escape.iluminacion=iluminacion,
    medios_escape.tipo_lampara=tipo_lampara,
    medios_escape.cantidad_lampara=cantidad_lampara,
    medios_escape.señalizacion=señalizacion,
    medios_escape.tipo_señal=tipo_señal,
    medios_escape.pasillo=pasillo,
    medios_escape.nro_pasillo=nro_pasillo,
    medios_escape.ancho_pasillo=ancho_pasillo,
    medios_escape.rampa=rampa,
    medios_escape.angulo_rampa=angulo_rampa,
    



    await medios_escape.save();

    return res.json(medios_escape);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getMedios_escape= async (req: Request, res: Response) => {
  try {
    const medios_escape = await Medios_escape.find();

    return res.json(medios_escape);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateMedios_escape = async (req: Request, res: Response) => {
  const { id } = req.params;

  const medios_escape = await Medios_escape.findOneBy({ id: parseInt(id) });
  console.log(medios_escape);

  if (!medios_escape)
    return res.status(404).json({ message: " does not exists" });

 const update =  await Medios_escape.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteMedios_escape = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Medios_escape.delete({ id: parseInt(id) });

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
