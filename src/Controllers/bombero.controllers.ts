import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Person } from "../entities/person";
import { Rango } from "../entities/rango";

export const createBombero = async (req: Request, res: Response) => {
  try {
    const {nombre_rango_bombero , ordenGeneral, status, person, rango } = req.body;

    const bombero = new Bombero();

    bombero.nombre_rango_bombero = nombre_rango_bombero;
    bombero.ordenGeneral = ordenGeneral;
    bombero.status = status;
    bombero.person=person;
    bombero.rango=rango;


    const validar_person = await Person.findOne({where:{id:person}});

    const validar_rango = await Rango.findOne({where:{id:rango}});

    if(!validar_person){
      return res.status(500).json({ message: "no se encontro esta persona"});
    }

    if(!validar_rango){
      return res.status(500).json({ message: "no se encontro el rango"});
    }


    await bombero.save();

    console.log(bombero);

    return res.json(bombero);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getBombero = async (req: Request, res: Response) => {
  try {
    const bombero = await Bombero.find({relations:{person:true}});

    return res.json(bombero);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateBombero = async (req: Request, res: Response) => {
  const { id } = req.params;

  const bombero = await Bombero.findOneBy({ id: parseInt(req.params.id) });
  console.log(bombero);

  if (!bombero)
    return res.status(404).json({ message: "firemen does not exists" });

  await Bombero.update({ id: parseInt(id) }, req.body);

  return res.sendStatus(204);
};

export const deleteBombero = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Bombero.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: "person not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
