import { Router } from "express";
import {createMunicipio,getMunicipio,updateMunicipio,deleteMunicipio} from "../Controllers/municipio.controllers";

export const router = Router()

router.post("/", createMunicipio);

router.get("/", getMunicipio);

router.put("/:id", updateMunicipio);

router.delete("/:id", deleteMunicipio);
