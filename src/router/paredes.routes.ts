import { Router } from "express";
 import {createParedes,getParedes,updateParedes,deleteParedes} from "../Controllers/paredes.controllers";

export const router = Router()

router.post("/", createParedes);

 router.get("/", getParedes);

 router.put("/:id", updateParedes);

 router.delete("/:id", deleteParedes);