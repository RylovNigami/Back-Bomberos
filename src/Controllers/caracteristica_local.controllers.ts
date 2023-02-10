import { Response, Request } from "express";
import { Caracteristica_local } from "../entities/caracteristica_local";

export const createCaracteristica_local = async (req: Request, res: Response) => {
    try {
      const {  nro_niveles,nivel_inmueble,area,escaleras,contrahuella,huella,paredes,pasamanos,pisos,plafones,puertas,techos,ventanas} = req.body;
  
      const caracterisca_local = new Caracteristica_local();
       caracterisca_local.nro_niveles= nro_niveles;
       caracterisca_local.nivel_inmueble= nivel_inmueble;
       caracterisca_local.area=area;
       caracterisca_local.escaleras=escaleras,
       caracterisca_local.contrahuella=contrahuella,
       caracterisca_local.huella=huella,
       caracterisca_local.paredes=paredes,
       caracterisca_local.pasamanos=pasamanos,
       caracterisca_local.pisos=pisos,
       caracterisca_local.plafones=plafones,
       caracterisca_local.puertas=puertas,
       caracterisca_local.techos=techos,
       caracterisca_local.ventanas=ventanas;
  
  
      await caracterisca_local.save();
  
      return res.json(caracterisca_local);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getCaracteristica_local = async (req: Request, res: Response) => {
    try {
      const caracterisca_local = await Caracteristica_local.find();
  
      return res.json(caracterisca_local);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateCaracteristica_local = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const caracterisca_local = await Caracteristica_local.findOneBy({ id: parseInt(id) });
    console.log(caracterisca_local);
  
    if (!caracterisca_local)
      return res.status(404).json({ message: " does not exists" });
  
   const update =  await Caracteristica_local.update({ id: parseInt(id) }, req.body);
  
    return res.json(update);
  };
  
  export const deleteCaracteristica_local = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Caracteristica_local.delete({ id: parseInt(id) });
  
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
  