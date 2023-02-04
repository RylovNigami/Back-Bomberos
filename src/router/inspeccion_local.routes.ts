import { Router } from "express";
import { create } from "../Controllers/inspeccion_local.controllers";
  
export const router = Router();
  
router.post("/", create);
  
router.get("/");
  
router.put("/:id");
  
router.delete("/:id");
