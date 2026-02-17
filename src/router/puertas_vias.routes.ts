import { Router } from "express";
 import {createPuertas_vias,getPuertas_vias,updatePuertas_vias,deletePuertas_vias} from "../Controllers/puertas_vias.controllers";

export const router = Router()

router.post("/", createPuertas_vias);

 router.get("/", getPuertas_vias);

 router.put("/:id", updatePuertas_vias);

 router.delete("/:id", deletePuertas_vias);