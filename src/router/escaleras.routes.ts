import { Router } from "express";
import {createEscaleras,getEscaleras,updateEscaleras,deleteEscaleras} from "../Controllers/escaleras.controllers";

export const router = Router();

router.post("/", createEscaleras);

router.get("/", getEscaleras);

router.put("/:id", updateEscaleras);

router.delete("/:id", deleteEscaleras);
