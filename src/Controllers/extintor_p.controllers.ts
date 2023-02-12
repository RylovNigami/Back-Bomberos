import { Response, Request } from "express";
import { Caracteristica_local } from "../entities/caracteristica_local";
import { Extintor_p } from "../entities/extintor_p";

export const createExtintor_p = async (req: Request, res: Response) => {
    try {
      const { posee,operativo_extintor,tipo_extintor,capacidad_extintor,empresa,reubicacion,requiere,tipo_requiere,local } = req.body;
  
      const extintor_p = new Extintor_p();
      extintor_p.posee=posee,
      extintor_p.operativo_extintor=operativo_extintor,
      extintor_p.tipo_extintor=tipo_extintor,
      extintor_p.capacidad_extintor=capacidad_extintor,
      extintor_p.empresa=empresa,
      extintor_p.reubicacion=reubicacion,
      extintor_p.requiere=requiere,
      extintor_p.tipo_requiere=tipo_requiere,
      extintor_p.local=local;
        
  
  
      await extintor_p.save();
  
      return res.json(Extintor_p);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getExtintor_p = async (req: Request, res: Response) => {
    try {
      const extintor_p = await Extintor_p.find();
  
      return res.json(extintor_p);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateExtintor_p = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const extintor_p = await Extintor_p.findOneBy({ id: parseInt(id) });
    console.log(extintor_p);
  
    if (!extintor_p)
      return res.status(404).json({ message: " does not exists" });
  
   const update =  await Extintor_p.update({ id: parseInt(id) }, req.body);
  
    return res.json(update);
  };
  
  export const deleteExtintor_p = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Extintor_p.delete({ id: parseInt(id) });
  
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
  