import { Router } from "express";
 import {createTanque_gas,getTanques_gas,updateTanque_gas,deleteTanque_gas} from "../Controllers/tanque_gas.controllers";

export const router = Router()

router.post("/", createTanque_gas);

 router.get("/", getTanques_gas);

 router.put("/:id", updateTanque_gas);

 router.delete("/:id", deleteTanque_gas);