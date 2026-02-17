import { Router } from "express";
 import {createPasamanos,getPasamanos,updatePasamanos,deletePasamanos} from "../Controllers/pasamanos.controllers";

export const router = Router()

router.post("/", createPasamanos);

 router.get("/", getPasamanos);

 router.put("/:id", updatePasamanos);

 router.delete("/:id", deletePasamanos);