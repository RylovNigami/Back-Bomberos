import { Router } from "express";
 import {createInspeccion,getInspeccion,updateInspeccion,deleteInspeccion} from "../Controllers/inspeccion-controllers";

export const router = Router()

router.post("/", createInspeccion);

 router.get("/", getInspeccion);

 router.put("/:id", updateInspeccion);

 router.delete("/:id", deleteInspeccion);
