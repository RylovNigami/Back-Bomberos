import { Router } from "express";

import {createAlarmas_local,getAlarmas_local,updateAlarmas_local,deleteAlarmas_local} from "../Controllers/alarmas_local.controllers";

export const router = Router();

router.post("/", createAlarmas_local);

router.get("/", getAlarmas_local);

router.put("/:id", updateAlarmas_local);

router.delete("/:id", deleteAlarmas_local);