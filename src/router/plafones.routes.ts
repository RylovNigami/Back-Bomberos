import { Router } from "express";
 import {createPlafones,getPlafones,updatePlafones,deletePlafones} from "../Controllers/plafones.controllers";

export const router = Router()

router.post("/", createPlafones);

 router.get("/", getPlafones);

 router.put("/:id", updatePlafones);

 router.delete("/:id", deletePlafones);