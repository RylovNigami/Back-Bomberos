import { Router } from "express";
import {createDepartamento,getDepartamento,updateDepartamento,deleteDepartamengo} from "../Controllers/departamento.controllers";

export const router = Router();

router.post("/", createDepartamento);

router.get("/", getDepartamento);

router.put("/:id", updateDepartamento);

router.delete("/:id", deleteDepartamengo);
