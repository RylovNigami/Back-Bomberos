import { Router } from "express";
 import {createVentanas,getVentanas,updateVentanas,deleteVentanas} from "../Controllers/ventanas.controllers";

export const router = Router()

router.post("/", createVentanas);

 router.get("/", getVentanas);

 router.put("/:id", updateVentanas);

 router.delete("/:id", deleteVentanas);