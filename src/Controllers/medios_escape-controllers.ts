import { Response, Request } from "express";
import { Departamento } from "../entities/departamento";
import { Electricidad } from "../entities/electricidad";
import { Medios_escape } from "../entities/medios_escape";


export const createMedios_escape = async (req: Request, res: Response) => {
  try {
    const {  vias_escape,condicion_escaleras, tipo_escaleras,escalera_vias,ancho_escalera,altura_pasamano,altura_contrahuella,ancho_huella,tipo_puertaviasEscape,sentido_salida,observacion_viasEscape,local,
      ventilacion_viasEscape,condicion_venviasEscape,tipo_venviasEscape,cinta_antirresbalante,pasillos_circulacion,rampas_acceso,escaleras_cintaAntirresbalante,sitio_cintaAntirresbalante,iluminacion_emergencia,tipo_lamparaEmergencia,cantidad_lamparaEmergencia,señalizacion_viasEscape,tipo_señalviasEscape,
        pasillo_viasEscape,nro_pasilloviasEscape,ancho_pasilloviasEscape,
        foto_iluminiscentes,reflectante_señalvias,convencionales_señalvias,rampa_viasEscape,angulo_rampaEscape,puertas_vias} = req.body;

    const medios_escape= new Medios_escape();
    medios_escape.vias_escape=vias_escape,
    medios_escape.escalera_vias=escalera_vias;
    medios_escape.local=local;
    medios_escape.ventilacion_viasEscape=ventilacion_viasEscape,
    medios_escape.condicion_venviasEscape=condicion_venviasEscape,
    medios_escape.tipo_venviasEscape=tipo_venviasEscape
    medios_escape.cinta_antirresbalante=cinta_antirresbalante,
    medios_escape.pasillos_circulacion=pasillos_circulacion,
    medios_escape.rampas_acceso=rampas_acceso,
    medios_escape.escaleras_cintaAntirresbalante,
    medios_escape.iluminacion_emergencia=iluminacion_emergencia,
    medios_escape.tipo_lamparaEmergencia=tipo_lamparaEmergencia,
    medios_escape.foto_iluminiscentes=foto_iluminiscentes,
    medios_escape.reflectante_señalvias=reflectante_señalvias,
    medios_escape.convencionales_señalvias=convencionales_señalvias,
    medios_escape.cantidad_lamparaEmergencia=cantidad_lamparaEmergencia,
    medios_escape.señalizacion_viasEscape=señalizacion_viasEscape,
    medios_escape.pasillo_viasEscape=pasillo_viasEscape,
    medios_escape.nro_pasilloviasEscape=nro_pasilloviasEscape,
    medios_escape.ancho_pasilloviasEscape=ancho_pasilloviasEscape,
    medios_escape.rampa_viasEscape=rampa_viasEscape,
    medios_escape.angulo_rampaEscape=angulo_rampaEscape,
    medios_escape.escalera_vias=escalera_vias,
    medios_escape.puertas_vias=puertas_vias;
    



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
