import { Router } from "express";
import {createEstacion_manual,getEstacion_manual,updateEstacion_manual,deleteEstacion_manual} from "../Controllers/estacion_manual.controllers";

export const router = Router();

router.post("/", createEstacion_manual);

router.get("/", getEstacion_manual);

router.put("/:id", updateEstacion_manual);

router.delete("/:id", deleteEstacion_manual);
