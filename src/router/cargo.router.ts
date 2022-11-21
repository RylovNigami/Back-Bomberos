import { Router } from "express";
 import {createCargo,getCargo,updateCargo,deleteCargo} from "../Controllers/cargo.controllers";

const router = Router();

router.post("/cargo",createCargo);

 router.get("/cargo",getCargo);

 router.put("/cargo/:id",updateCargo);

router.delete("/cargo/:id",deleteCargo);

export default router;
