import { Response, Request } from "express";
import { Caracteristica_local } from "../entities/caracteristica_local";
import { Extintor_local } from "../entities/extintor_local";
import { Extintor_p } from "../entities/extintor_p";

export const createExtintor_local = async (req: Request, res: Response) => {
    try {
      const { operativo_extintorPortatil,capacidad_extintorPortatil,reubicacion_extintorPortatil,local,extintor_p,company,agente_extinguidor } = req.body;
  
      const extintor_local = new Extintor_local();
      extintor_local.operativo_extintorPortatil=operativo_extintorPortatil,
      extintor_local.capacidad_extintorPortatil=capacidad_extintorPortatil,
      extintor_local.reubicacion_extintorPortatil=reubicacion_extintorPortatil,
      extintor_local.local=local,
      extintor_local.extintor_p=extintor_p,
      extintor_local.company=company,
      extintor_local.agente_extinguidor=agente_extinguidor;
    
  
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
  