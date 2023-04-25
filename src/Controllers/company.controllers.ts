import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Company } from "../entities/company";
import { Departamento } from "../entities/departamento";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createCompany = async (req: Request, res: Response) => {
  try {
    const {  companyName} = req.body;

    const company = new Company();
    company.companyName=companyName;
 


    await company.save();

    return res.json(company);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getCompany = async (req: Request, res: Response) => {
  try {
    const company = await Company.find();

    return res.json(company);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateCompany = async (req: Request, res: Response) => {
  const { id } = req.params;

  const company = await Company.findOneBy({ id: parseInt(id) });
  console.log(company);

  if (!company)
    return res.status(404).json({ message: "does not exists" });

 const update =  await Company.update({ id: parseInt(id) }, req.body);

  return res.json(update);
};

export const deleteCompany = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Company.delete({ id: parseInt(id) });

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
