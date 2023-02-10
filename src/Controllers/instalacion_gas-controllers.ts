import { Response, Request } from "express";
import { Instalacion_gas } from "../entities/instalacion_gas";


export const createInstalacion_gas= async (req: Request, res: Response) => {
    try {
      const { suministro,tipo,cap_bombona,ubic_bombona,condicion_v,ventilada,cap_tanque,ubic_tanque, aterramiento,ubic_valvula } = req.body;
  
      const instalacion_gas = new Instalacion_gas();

      instalacion_gas.suministro=suministro,
      instalacion_gas.tipo=tipo,
      instalacion_gas.cap_bombona=cap_bombona,
      instalacion_gas.ubic_bombona=ubic_bombona,
      instalacion_gas.condicion_v=condicion_v,
      instalacion_gas.ventilada=ventilada,
      instalacion_gas.cap_tanque=cap_tanque,
      instalacion_gas.ubic_tanque=ubic_tanque,
      instalacion_gas.aterramiento=aterramiento,
      instalacion_gas.ubic_valvula=ubic_valvula,
   
  
  
      await instalacion_gas.save();
  
      return res.json(instalacion_gas);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getInstalacion_gas = async (req: Request, res: Response) => {
    try {
      const instalacion_gas = await Instalacion_gas.find();
  
      return res.json(instalacion_gas);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateInstalacion_gas = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const instalacion_gas = await Instalacion_gas.findOneBy({ id: parseInt(id) });
    console.log(instalacion_gas);
  
    if (!instalacion_gas)
      return res.status(404).json({ message: "Almacenamiento does not exists" });
  
  // const update =  await instalacion_gas.update({ id: parseInt(id) }, req.body)
  
    //return res.json(update);
  };
  
  export const deleteInstalacion_gas = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Instalacion_gas.delete({ id: parseInt(id) });
  
      if (result.affected === 0) {
        return res.status(404).json({ message: "gas" });
      }
  
      return res.status(201).json({ message: "Se ha borrado exitosamente" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  