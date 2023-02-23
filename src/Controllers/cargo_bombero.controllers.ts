/*import { Response, Request } from "express";
import { Cargo } from "../entities/cargo";
import { Cargo_bombero } from "../entities/cargo_bombero";
import { Departamento } from "../entities/departamento";

export const createCargo_bombero = async (req: Request, res: Response) => {
    try {
      const {  status,temporabilidad, cargo, departamento,bombero} = req.body;
  
      const cargo_bombero = new Cargo_bombero();

      cargo_bombero.status=status,
      cargo_bombero.temporabilidad=temporabilidad,
      cargo_bombero.cargo=cargo,
      cargo_bombero.departamento=departamento,
      cargo_bombero.bombero=bombero;
      
       
   

      const validar_cargo = await Cargo.findOne({where:{id:cargo}});

      if(!validar_cargo){
        return res.status(500).json({ message: "no se encontro "});
      }

      const validar_bombero = await Cargo.findOne({where:{id:bombero}});

      if(!validar_bombero){
        return res.status(500).json({ message: "no se encontro"});
      }

      const validar_departamento = await Departamento.findOne({where:{id:departamento}});
  
  
      if(!validar_departamento){
        return res.status(500).json({ message: "no se encontro "});
      }
  
  
      await cargo_bombero.save();
  
      console.log(cargo_bombero);
  
      return res.json(cargo_bombero);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const getCargo_bombero = async (req: Request, res: Response) => {
    try {
      const cargo_bombero = await Cargo_bombero.find({relations:{cargo:true}});
  
      return res.json(cargo_bombero);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      }
    }
  };
  
  export const updateCargo_bombero = async (req: Request, res: Response) => {
    const { id } = req.params;
  
    const cargo_bombero= await Cargo_bombero.findOneBy({ id: parseInt(req.params.id) });
    console.log(cargo_bombero);
  
    if (!cargo_bombero)
      return res.status(404).json({ message: "firemen does not exists" });
  
    await Cargo_bombero.update({ id: parseInt(id) }, req.body);
  
    return res.sendStatus(204);
  };
  
  export const deleteCargo_bombero = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const result = await Cargo_bombero.delete({ id: parseInt(id) });
  
      if (result.affected === 0) {
        return res.status(404).json({ message: "person not found" });
      }

      return res.sendStatus(204);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(500).json({ message: "Se ha eliminado con exito" });
      }
    }
  };*/
  