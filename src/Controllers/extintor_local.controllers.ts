import { Response, Request } from "express";
import { Caracteristica_local } from "../entities/caracteristica_local";
import { Extintor_local } from "../entities/extintor_local";
import { Extintor_p } from "../entities/extintor_p";

export const createExtintor_local = async (req: Request, res: Response) => {
    try {
      const { cant_portatil,operativo_extintor,tipo_extintor,capacidad_extintor,empresa,reubicacion,local,extintor_p } = req.body;
  
      const extintor_local = new Extintor_local();
      extintor_local.cant_portatil=cant_portatil,
      extintor_local.operativo_extintor=operativo_extintor,
      extintor_local.tipo_extintor=tipo_extintor,
      extintor_local.capacidad_extintor=capacidad_extintor,
      extintor_local.empresa=empresa,
      extintor_local.reubicacion=reubicacion,
      extintor_local.local=local,
      extintor_local.extintor_p=extintor_p;
    
  
      await extintor_local.save();
  
      return res.json(Extintor_local);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getExtintor_local = async (req: Request, res: Response) => {
    try {
      const extintor_local = await Extintor_local.find();
  
      return res.json(extintor_local);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateExtintor_local = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const extintor_local = await Extintor_local.findOneBy({ id: parseInt(id) });
    console.log(extintor_local);
  
    if (!extintor_local)
      return res.status(404).json({ message: " does not exists" });
  
   const update =  await Extintor_local.update({ id: parseInt(id) }, req.body);
  
    return res.json(update);
  };
  
  export const deleteExtintor_local = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Extintor_local.delete({ id: parseInt(id) });
  
      if (result.affected === 0) {
        return res.status(404).json({ message: "not found" });
      }
  
      return res.status(201).json({ message: "Se ha borrado exitosamente" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  