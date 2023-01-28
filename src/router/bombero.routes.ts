import { Router } from "express";
import {
  createBombero,
  getBombero,
  updateBombero,
  deleteBombero,
} from "../Controllers/bombero.controllers";

export const router = Router();

router.post("/", createBombero);

router.get("/", getBombero);

router.put("/:id", updateBombero);

router.delete("/:id", deleteBombero);
