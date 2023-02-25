import { Router } from "express";
import {createSolitude,getSolitude, updateSolitude, deleteSolitude} from "../Controllers/solitude.controllers";

export const router = Router()

router.post("/", createSolitude);

router.get("/", getSolitude);

router.put("/:id", updateSolitude);

router.delete("/:id", deleteSolitude);
