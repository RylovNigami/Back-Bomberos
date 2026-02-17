import { Router } from "express";
import {createEscaleras_vias,getEscaleras_vias,updateEscaleras_vias,deleteEscaleras_vias} from "../Controllers/escaleras_vias.controllers";

export const router = Router();

router.post("/", createEscaleras_vias);

router.get("/", getEscaleras_vias);

router.put("/:id", updateEscaleras_vias);

router.delete("/:id", deleteEscaleras_vias);
