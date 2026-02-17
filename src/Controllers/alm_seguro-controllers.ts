
import { Response, Request } from "express";
import { Alm_seguro } from "../entities/alm_seguro";


export const createAlm_seguro = async (req: Request, res: Response) => {
    try {
      const {  poseeAlamacenamiento,tipo_mercanciaAlmacenada,norma_almacenamiento,orden_limpieza,proteccion_contraIncendios,tipo_proteccionIncendio,local} = req.body;
  
      const alm_seguro = new Alm_seguro();
      alm_seguro.poseeAlamacenamiento=poseeAlamacenamiento,
      alm_seguro.tipo_mercanciaAlmacenada=tipo_mercanciaAlmacenada;
      alm_seguro.norma_almacenamiento=norma_almacenamiento;
      alm_seguro.orden_limpieza=orden_limpieza;
      alm_seguro.proteccion_contraIncendios=proteccion_contraIncendios;
      alm_seguro.tipo_proteccionIncendio=tipo_proteccionIncendio;
      alm_seguro.local=local;
   
  
  
      await alm_seguro.save();
  
      return res.json(alm_seguro);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getAlm_seguro = async (req: Request, res: Response) => {
    try {
      const alm_seguro = await Alm_seguro.find();
  
      return res.json(alm_seguro);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateAlm_seguro = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const alm_seguro = await Alm_seguro.findOneBy({ id: parseInt(id) });
    console.log(alm_seguro);
  
    if (!alm_seguro)
      return res.status(404).json({ message: "Almacenamiento does not exists" });
  
   // const update =  await alm_seguro.update({ id: parseInt(id) }, req.body)
  
   // return res.json(update);
  };
  
  export const deleteAlm_seguro = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Alm_seguro.delete({ id: parseInt(id) });
  
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
  