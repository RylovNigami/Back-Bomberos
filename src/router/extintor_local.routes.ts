import { Router } from "express";
import {createExtintor_local,getExtintor_local,updateExtintor_local,deleteExtintor_local} from "../Controllers/extintor_local.controllers";

export const router = Router()

router.post("/", createExtintor_local);

router.get("/", getExtintor_local);

router.put("/:id", updateExtintor_local);

router.delete("/:id", deleteExtintor_local);