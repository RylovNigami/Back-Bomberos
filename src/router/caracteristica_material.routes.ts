import { Router } from "express";
import { create } from "../Controllers/prueba.controllers";
  
export const router = Router();
  
router.post("/", create);
  
router.get("/");
  
router.put("/:id");
  
router.delete("/:id");