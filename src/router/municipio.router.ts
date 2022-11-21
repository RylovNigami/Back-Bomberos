import { Router } from "express";
import {createMunicipio,getMunicipio,updateMunicipio,deleteMunicipio} from "../Controllers/municipio.controllers";

const router = Router()

router.post("/municipio",createMunicipio);

 router.get("/municipio",getMunicipio);

 router.put("/municipio/:id",updateMunicipio);

 router.delete("/municipio/:id",deleteMunicipio);

export default router;