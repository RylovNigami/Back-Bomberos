import { Router } from "express";
import { create,get } from "../Controllers/medios_local.controllers";
  
export const router = Router();
  
router.post("/", create);
  
router.get("/",get);
  
router.put("/:id");
  
router.delete("/:id");
