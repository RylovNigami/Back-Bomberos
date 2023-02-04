import { Response, Request } from "express";

import { Cargo_bombero } from "../entities/cargo_bombero";

export const createCargo_bombero = async (req: Request, res: Response) => {
    try {
      const {  status,temporabilidad} = req.body;
  
      const cargo_bombero = new Cargo_bombero();

      cargo_bombero.status=status,
      cargo_bombero.temporabilidad=temporabilidad,
      
       
   

      await cargo_bombero.save();
  
      return res.json(cargo_bombero);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getCargo_bombero = async (req: Request, res: Response) => {
    try {
      const cargo_bombero = await Cargo_bombero.find();
  
      return res.json(cargo_bombero);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateCargo_bombero = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const cargo_bombero = await Cargo_bombero.findOneBy({ id: parseInt(id) });
    console.log(cargo_bombero);
  
    if (!cargo_bombero)
      return res.status(404).json({ message: " does not exists" });
  
   const update =  await Cargo_bombero.update({ id: parseInt(id) }, req.body);
  
    return res.json(update);
  };
  
  export const deleteCargo_bombero = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Cargo_bombero.delete({ id: parseInt(id) });
  
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
  