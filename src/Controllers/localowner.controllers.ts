import { Response, Request } from "express";
import { Interviewer } from "../entities/interviewer";
import { LocalOwner } from "../entities/localOwner";
import { Person } from "../entities/person";

export const createLocalOwner = async (req: Request, res: Response) => {
  try {
    const {  localOwnerFirstName,localOwnerLastName,localOwnerDni,localOwnerMail,local } = req.body;

    const localOwner = new LocalOwner();
    localOwner.localOwnerFirstName=localOwnerFirstName,
    localOwner.localOwnerLastName=localOwnerLastName,
    localOwner.localOwnerDni=localOwnerDni,
    localOwner.localOwnerMail=localOwnerMail,
    localOwner.local=local;

    await localOwner.save();

    return res.json(localOwner);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getLocalOwner = async (req: Request, res: Response) => {
  try {
    const localOwner = await LocalOwner.find();

    return res.json(localOwner);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateLocalOwner = async (req: Request, res: Response) => {
  const { id } = req.params;

  const localOwner = await LocalOwner.findOneBy({ id: parseInt(id) });
  console.log(localOwner);

  if (!localOwner)
    return res.status(404).json({ message: "person does not exists" });

  await LocalOwner.update({ id: parseInt(id) }, req.body);

  return res.sendStatus(204);
};

export const deleteLocalOwner = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await LocalOwner.delete({ id: parseInt(id) });

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
