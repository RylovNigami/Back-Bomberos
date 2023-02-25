import { Response, Request } from "express";
import { Interviewer } from "../entities/interviewer";


export const createInterviewer = async (req: Request, res: Response) => {
  try {
    const { interviewerFirstName,interviewerLastName,interviewerDni,interviewerNumber } = req.body;

    const interviewer = new Interviewer();
    interviewer.interviewerFirstName=interviewerFirstName,
    interviewer.interviewerLastName=interviewerLastName,
    interviewer.interviewerDni=interviewerDni,
    interviewer.interviewerNumber=interviewerNumber;

    await interviewer.save();

    return res.json(interviewer);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getInterviewer = async (req: Request, res: Response) => {
  try {
    const interviewer = await Interviewer.find();

    return res.json(interviewer);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateInterviewer = async (req: Request, res: Response) => {
  const { id } = req.params;

  const interviewer = await Interviewer.findOneBy({ id: parseInt(id) });
  console.log(interviewer);

  if (!interviewer)
    return res.status(404).json({ message: "person does not exists" });

  await Interviewer.update({ id: parseInt(id) }, req.body);

  return res.sendStatus(204);
};

export const deleteInterviewer = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Interviewer.delete({ id: parseInt(id) });

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
