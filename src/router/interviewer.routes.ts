import { Router } from "express";
import {createInterviewer, getInterviewer,updateInterviewer,deleteInterviewer} from "../Controllers/interviewer.controllers";

export const router = Router()

router.post("/", createInterviewer);

router.get("/", getInterviewer);

router.put("/:id", updateInterviewer);

router.delete("/:id", deleteInterviewer);
