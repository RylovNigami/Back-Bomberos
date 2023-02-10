import { Router } from "express";

import {createCaracteristica_local,getCaracteristica_local,updateCaracteristica_local,deleteCaracteristica_local} from "../Controllers/caracteristica_local.controllers";

export const router = Router();

router.post("/", createCaracteristica_local);

router.get("/", getCaracteristica_local);

router.put("/:id", updateCaracteristica_local);

router.delete("/:id", deleteCaracteristica_local);
