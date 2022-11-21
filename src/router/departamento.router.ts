import { Router } from "express";
 import {createDepartamento,getDepartamento,updateDepartamento,deleteDepartamengo} from "../Controllers/departamento.controllers";

const router = Router();

router.post("/departamento",createDepartamento);

 router.get("/departamento",getDepartamento);

 router.put("/departamento/:id",updateDepartamento);

router.delete("/departamento/:id",deleteDepartamengo);

export default router;
