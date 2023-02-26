import { Router } from "express";

import {createAgente_extinguidor,getAgente_extinguidor,updateAgente_extinguidor,deleteAgente_extinguidor} from "../Controllers/agente_extinguidor.controllers";

export const router = Router();

router.post("/", createAgente_extinguidor);

router.get("/", getAgente_extinguidor);

router.put("/:id", updateAgente_extinguidor);

router.delete("/:id", deleteAgente_extinguidor);