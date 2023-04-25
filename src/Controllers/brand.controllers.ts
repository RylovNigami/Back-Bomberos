import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Brand } from "../entities/brand";
import { Cargo } from "../entities/cargo";
import { Departamento } from "../entities/departamento";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createBrand = async (req: Request, res: Response) => {
  try {
    const {  brandname} = req.body;

    const brand = new Brand();
    brand.brandname = brandname;
 


    await brand.save();

    return res.json(brand);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getBrand = async (req: Request, res: Response) => {
  try {
    const brand = await Brand.find();

    return res.json(brand);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateBrand = async (req: Request, res: Response) => {
  const { id } = req.params;

  const brand = await Brand.findOneBy({ id: parseInt(id) });
  console.log(brand);

  if (!brand)
    return res.status(404).json({ message: "cargo does not exists" });

 const update =  await Brand.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteBrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Brand.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: " not found" });
    }

    return res.status(201).json({ message: "Se ha borrado exitosamente" });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
