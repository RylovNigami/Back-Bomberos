import { Response, Request } from "express";
import { Alm_riesgoso } from "../entities/alm_riesgoso";
import { Alm_seguro } from "../entities/alm_seguro";


export const createAlm_riesgoso = async (req: Request, res: Response) => {
    try {
      const { ident_material, material_p, tipo_contenedor, cant_contenedor, cap_contenedor,ubic_contenedor,ventilacion,tipo_ven, 
        condicion_ven, dique,condicion_dique,drenaje, condicion_drenaje,ident_riesgo, seguridad_material,kit_control,
        condiciones_kit, proteccion_personal, condicion_proteccion,racda,nro_racda,resquimic,nro_resquimic,daex,nro_daex,mppmp,nro_mppmp,ducha, condicion_ducha } = req.body;
  
      const alm_riesgoso = new Alm_riesgoso();
        alm_riesgoso.ident_material=ident_material,
        alm_riesgoso.material_p=material_p,
        alm_riesgoso.tipo_contenedor=tipo_contenedor,
        alm_riesgoso.cant_contenedor=cant_contenedor,
        alm_riesgoso.cap_contenedor=cap_contenedor,
        alm_riesgoso.ubic_contenedor=ubic_contenedor,
        alm_riesgoso.ventilacion=ventilacion,
        alm_riesgoso.tipo_ven=tipo_ven,
        alm_riesgoso.condicion_ven=condicion_ven,
        alm_riesgoso.dique=dique,
        alm_riesgoso.condicion_dique=condicion_dique,
        alm_riesgoso.drenaje=drenaje,
        alm_riesgoso.condicion_drenaje=condicion_drenaje
        alm_riesgoso.ident_material=ident_material,
        alm_riesgoso.ident_riesgo=ident_riesgo,
        alm_riesgoso.seguridad_material=seguridad_material,
        alm_riesgoso.kit_control=kit_control,
        alm_riesgoso.condiciones_kit=condiciones_kit
        alm_riesgoso.proteccion_personal=proteccion_personal,
        alm_riesgoso.condicion_proteccion=condicion_proteccion,
        alm_riesgoso.racda=racda,
        alm_riesgoso.nro_racda=nro_racda,
        alm_riesgoso.resquimic=resquimic,
        alm_riesgoso.nro_resquimic=nro_resquimic,
        alm_riesgoso.daex=daex,
        alm_riesgoso.nro_daex=nro_daex,
        alm_riesgoso.mppmp=mppmp,
        alm_riesgoso.nro_mppmp=nro_mppmp,
        alm_riesgoso.ducha=ducha,
        alm_riesgoso.condicion_ducha=condicion_ducha;


  
      await alm_riesgoso.save();
  
      return res.json(alm_riesgoso);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getAlm_riesgoso = async (req: Request, res: Response) => {
    try {
      const alm_riesgoso = await Alm_riesgoso.find();
  
      return res.json(alm_riesgoso);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateAlm_riesgoso = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const alm_riesgoso = await Alm_seguro.findOneBy({ id: parseInt(id) });
    console.log(alm_riesgoso);
  
    if (!alm_riesgoso)
      return res.status(404).json({ message: "Almacenamiento does not exists" });
  
   // const update =  await alm_seguro.update({ id: parseInt(id) }, req.body)
  
   // return res.json(update);
  };
  
  export const deleteAlm_riesgoso = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Alm_riesgoso.delete({ id: parseInt(id) });
  
      if (result.affected === 0) {
        return res.status(404).json({ message: "Almacenamiento" });
      }
  
      return res.status(201).json({ message: "Se ha borrado exitosamente" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  