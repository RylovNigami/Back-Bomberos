import { Response, Request } from "express";
import { Person } from "../entities/person";

export const createPerson = async (req: Request, res: Response) => {
  try {
    const { firstname, lastname, cedula, correo, telefono } = req.body;

    const person = new Person();
    person.firstName = firstname;
    person.lastName = lastname;
    person.cedula = cedula;
    person.correo = correo;
    person.telefono = telefono;

    await person.save();

    console.log(person);

    return res.json(person);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getPerson = async (req: Request, res: Response) => {
  try {
    const person = await Person.find();

    return res.json(getPerson);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updatePerson = async (req: Request, res: Response) => {
  const { id } = req.params;

  const person = await Person.findOneBy({ id: parseInt(req.params.id) });
  console.log(person);

  if (!person)
    return res.status(404).json({ message: "person does not exists" });

  await Person.update({ id: parseInt(id) }, req.body);

  return res.sendStatus(204);
};

export const deletePerson = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Person.delete({ id: parseInt(id) });

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
