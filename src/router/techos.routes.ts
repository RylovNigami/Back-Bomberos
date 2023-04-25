import { Router } from "express";
 import {createTechos,getTechos,updateTechos,deleteTechos} from "../Controllers/techos.controllers";

export const router = Router()

router.post("/", createTechos);

 router.get("/", getTechos);

 router.put("/:id", updateTechos);

 router.delete("/:id", deleteTechos);