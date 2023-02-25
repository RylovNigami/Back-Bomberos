import { Router } from "express";

import {createMedios_local,getMedios_local,updateMedios_local,deleteMedios_local} from "../Controllers/medioslocal.controllers";

export const router = Router();

router.post("/", createMedios_local);

router.get("/", getMedios_local);

router.put("/:id", updateMedios_local);

router.delete("/:id", deleteMedios_local);
