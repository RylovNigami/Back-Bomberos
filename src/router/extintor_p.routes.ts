import { Router } from "express";
import {createExtintor_p,getExtintor_p,updateExtintor_p,deleteExtintor_p} from "../Controllers/extintor_p.controllers";

export const router = Router()

router.post("/", createExtintor_p);

router.get("/", getExtintor_p);

router.put("/:id", updateExtintor_p);

router.delete("/:id", deleteExtintor_p);
