import { Router } from "express";
import {createDifusores,getDifusores,updateDifusores,deleteDifusores} from "../Controllers/difusores.controllers";

export const router = Router();

router.post("/", createDifusores);

router.get("/", getDifusores);

router.put("/:id", updateDifusores);

router.delete("/:id", deleteDifusores);
