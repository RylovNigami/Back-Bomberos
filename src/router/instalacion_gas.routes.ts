import { Router } from "express";
import {createInstalacion_gas,getInstalacion_gas,updateInstalacion_gas,deleteInstalacion_gas} from "../Controllers/instalacion_gas-controllers";

export const router = Router()

router.post("/", createInstalacion_gas);

router.get("/", getInstalacion_gas);

router.put("/:id", updateInstalacion_gas);

router.delete("/:id", deleteInstalacion_gas);
