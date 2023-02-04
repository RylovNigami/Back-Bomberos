import { Router } from "express";
import {createElectricidad,getElectricidad,updateElectricidad,deleteElectricidad} from "../Controllers/electricidad.controllers";

export const router = Router();

router.post("/", createElectricidad);

router.get("/", getElectricidad);

router.put("/:id", updateElectricidad);

router.delete("/:id", deleteElectricidad);
