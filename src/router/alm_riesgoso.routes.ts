import { Router } from "express";

import {createAlm_riesgoso,getAlm_riesgoso,updateAlm_riesgoso,deleteAlm_riesgoso} from "../Controllers/alm_riesgoso-controllers";

export const router = Router();

router.post("/", createAlm_riesgoso);

router.get("/", getAlm_riesgoso);

router.put("/:id", updateAlm_riesgoso);

router.delete("/:id", deleteAlm_riesgoso);