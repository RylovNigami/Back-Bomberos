import { Router } from "express";
import {createRango,getRango, updateRango, deleteRango} from "../Controllers/rango.controllers";

const router = Router()

router.post("/rango",createRango);

 router.get("/rango",getRango);

 router.put("/rango/:id",updateRango);

 router.delete("/rango/:id",deleteRango);

export default router;