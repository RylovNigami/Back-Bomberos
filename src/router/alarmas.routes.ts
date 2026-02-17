import { Router } from "express";

import {createAlarmas,getAlarmas,updateAlarmas,deleteAlarmas} from "../Controllers/alarmas.controllers";

export const router = Router();

router.post("/", createAlarmas);

router.get("/", getAlarmas);

router.put("/:id", updateAlarmas);

router.delete("/:id", deleteAlarmas);