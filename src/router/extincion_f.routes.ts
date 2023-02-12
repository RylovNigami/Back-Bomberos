import { Router } from "express";
import {createExtincion_f,getExtincion_f,updateExtincion_f,deleteExtincion_f} from "../Controllers/extincion_f.controllers";

export const router = Router()

router.post("/", createExtincion_f);

router.get("/", getExtincion_f);

router.put("/:id", updateExtincion_f);

router.delete("/:id", deleteExtincion_f);