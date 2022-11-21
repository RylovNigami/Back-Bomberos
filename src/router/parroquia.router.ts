import { Router } from "express";
import {createParroquia,getParroquia,updateParroquia,deleteParroquia} from "../Controllers/parroquia.controller";

const router = Router()

router.post("/parroquia",createParroquia);

 router.get("/parroquia",getParroquia);

 router.put("/parroquia/:id",updateParroquia);

 router.delete("/parroquia/:id",deleteParroquia);

export default router;