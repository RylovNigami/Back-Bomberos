import { Router } from "express";
import {createRango,getRango, updateRango, deleteRango} from "../Controllers/rango.controllers";

export const router = Router()

router.post("/", createRango);

router.get("/", getRango);

router.put("/:id", updateRango);

router.delete("/:id", deleteRango);
