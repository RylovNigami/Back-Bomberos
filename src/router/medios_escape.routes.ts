import { Router } from "express";

import {createMedios_escape,getMedios_escape,updateMedios_escape,deleteMedios_escape} from "../Controllers/medios_escape-controllers";

export const router = Router();

router.post("/", createMedios_escape);

router.get("/", getMedios_escape);

router.put("/:id", updateMedios_escape);

router.delete("/:id", deleteMedios_escape);
