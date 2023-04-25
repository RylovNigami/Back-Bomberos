import { Router } from "express";
import {createExtincion_local,getExtincion_local,updateExtincion_local,deleteExtincion_local} from "../Controllers/extincion_local.controllers";

export const router = Router()

router.post("/", createExtincion_local);

router.get("/", getExtincion_local);

router.put("/:id", updateExtincion_local);

router.delete("/:id", deleteExtincion_local);