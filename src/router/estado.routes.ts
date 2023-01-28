import { Router } from "express";
import {createEstado,getEstado,updateEstado,deleteEstado} from "../Controllers/estado.contollers";

export const router = Router()

router.post("/", createEstado);

router.get("/", getEstado);

router.put("/:id", updateEstado);

router.delete("/:id", deleteEstado);
