import { Router } from "express";
 import {createPuertas,getPuertas,updatePuertas,deletePuertas} from "../Controllers/puertas.controllers";

export const router = Router()

router.post("/", createPuertas);

 router.get("/", getPuertas);

 router.put("/:id", updatePuertas);

 router.delete("/:id", deletePuertas);