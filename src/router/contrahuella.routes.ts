import { Router } from "express";
import {createContrahuella,getContrahuella,updateContrahuella,deleteContrahuella} from "../Controllers/contrahuella-controllers";

export const router = Router();

router.post("/", createContrahuella);

router.get("/", getContrahuella);

router.put("/:id", updateContrahuella);

router.delete("/:id", deleteContrahuella);
