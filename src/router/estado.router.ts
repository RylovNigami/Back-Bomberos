import { Router } from "express";
import {createEstado,getEstado,updateEstado,deleteEstado} from "../Controllers/estado.contollers";

const router = Router()

router.post("/estado",createEstado);

 router.get("/estado",getEstado);

 router.put("/estado/:id",updateEstado);

 router.delete("/estado/:id",deleteEstado);

export default router;