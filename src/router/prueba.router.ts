import { Router } from "express";
import { create } from "../Controllers/prueba.controllers";
  
  const router = Router();
  
  router.post("/prueba", create );
  
  router.get("/", );
  
  router.put("//:id", );
  
  router.delete("//:id", );
  
  export default router;