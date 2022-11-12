import { Router } from "express";
import {
  createBombero,
  getBombero,
  updateBombero,
  deleteBombero,
} from "../Controllers/bombero.controllers";

const router = Router();

router.post("/bombero", createBombero);

router.get("/bombero", getBombero);

router.put("/bomberos/:id", updateBombero);

router.delete("/bomberos/:id", deleteBombero);

export default router;
