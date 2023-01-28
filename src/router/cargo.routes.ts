import { Router } from "express";
import {createCargo,getCargo,updateCargo,deleteCargo} from "../Controllers/cargo.controllers";

export const router = Router();

router.post("/", createCargo);

router.get("/", getCargo);

router.put("/:id", updateCargo);

router.delete("/:id", deleteCargo);
