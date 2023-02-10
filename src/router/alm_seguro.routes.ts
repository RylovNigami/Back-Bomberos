import { Router } from "express";

import {createAlm_seguro,getAlm_seguro,updateAlm_seguro,deleteAlm_seguro} from "../Controllers/alm_seguro-controllers";

export const router = Router();

router.post("/", createAlm_seguro);

router.get("/", getAlm_seguro);

router.put("/:id", updateAlm_seguro);

router.delete("/:id", deleteAlm_seguro);