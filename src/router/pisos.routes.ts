import { Router } from "express";
 import {createPisos,getPisos,updatePisos,deletePisos} from "../Controllers/pisos.controllers";

export const router = Router()

router.post("/", createPisos);

 router.get("/", getPisos);

 router.put("/:id", updatePisos);

 router.delete("/:id", deletePisos);