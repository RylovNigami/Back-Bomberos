import { Response, Request } from "express";
import { Caracteristica_local } from "../entities/caracteristica_local";
import { Extincion_f } from "../entities/extincion_f";
import { Extincion_local } from "../entities/extincion_local";
import { Extintor_p } from "../entities/extintor_p";

export const createExtincion_local = async (req: Request, res: Response) => {
    try {
      const { mangueras,condicion_manguera,longitud_manguera,diametro_manguera,area_protegerMangueras,rociadores,cubre_areaRociadores,local,extincion_f} = req.body;
  
      const extincion_local = new Extincion_local();
      extincion_local.mangueras=mangueras,
      extincion_local.condicion_manguera=condicion_manguera,
      extincion_local.longitud_manguera=longitud_manguera,
      extincion_local.diametro_manguera=diametro_manguera,
      extincion_local.area_protegerMangueras=area_protegerMangueras,
      extincion_local.rociadores=rociadores,
      extincion_local.cubre_areaRociadores=cubre_areaRociadores,
      extincion_local.local=local,
      extincion_local.extincion_f=extincion_f;
    
        
  
  
      await extincion_local.save();
  
      return res.json(Extincion_local);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getExtincion_local = async (req: Request, res: Response) => {
    try {
      const extincion_local = await Extincion_local.find();
  
      return res.json(extincion_local);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateExtincion_local = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const extincion_local= await Extincion_local.findOneBy({ id: parseInt(id) });
    console.log(extincion_local);
  
    if (!extincion_local)
      return res.status(404).json({ message: " does not exists" });
  
   const update =  await Extincion_local.update({ id: parseInt(id) }, req.body);
  
    return res.json(update);
  };
  
  export const deleteExtincion_local = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Extincion_local.delete({ id: parseInt(id) });
  
      if (result.affected === 0) {
        return res.status(404).json({ message: "cargo not found" });
      }
  
      return res.status(201).json({ message: "Se ha borrado exitosamente" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  