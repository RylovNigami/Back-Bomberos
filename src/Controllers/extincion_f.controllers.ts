import { Response, Request } from "express";
import { Caracteristica_local } from "../entities/caracteristica_local";
import { Extincion_f } from "../entities/extincion_f";
import { Extintor_p } from "../entities/extintor_p";

export const createExtincion_f = async (req: Request, res: Response) => {
    try {
      const { operativo_f,cap_tanque,ubic_tanque,cajetines_m,cantidad_c,mangueras,condicion_m,longitud,diametro,area_protegerf,local} = req.body;
  
      const extincion_f = new Extincion_f();
      extincion_f.operativo_f=operativo_f,
      extincion_f.cap_tanque=cap_tanque,
      extincion_f.ubic_tanque=ubic_tanque,
      extincion_f.cajetines_m=cajetines_m,
      extincion_f.cantidad_c=cantidad_c,
      extincion_f.mangueras=mangueras,
      extincion_f.condicion_m=condicion_m,
      extincion_f.longitud=longitud,
      extincion_f.diametro=diametro,
      extincion_f.area_protegerf=area_protegerf,
      extincion_f.local=local;
    
        
  
  
      await extincion_f.save();
  
      return res.json(Extintor_p);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getExtincion_f = async (req: Request, res: Response) => {
    try {
      const extincion_f = await Extincion_f.find();
  
      return res.json(extincion_f);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateExtincion_f = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const extincion_f= await Extincion_f.findOneBy({ id: parseInt(id) });
    console.log(extincion_f);
  
    if (!extincion_f)
      return res.status(404).json({ message: " does not exists" });
  
   const update =  await Extincion_f.update({ id: parseInt(id) }, req.body);
  
    return res.json(update);
  };
  
  export const deleteExtincion_f = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Extincion_f.delete({ id: parseInt(id) });
  
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
  