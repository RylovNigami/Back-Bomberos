import { Router } from "express";
import {createParroquia,getParroquia,updateParroquia,deleteParroquia} from "../Controllers/parroquia.controller";

export const router = Router()

router.post("/", createParroquia);

router.get("/", getParroquia);

router.put("/:id", updateParroquia);

router.delete("/:id", deleteParroquia);
