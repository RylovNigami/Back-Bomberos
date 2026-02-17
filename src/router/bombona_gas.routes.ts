import { Router } from "express";
import {
  createBombona_gas,
  getBombona_gas,
  updateBombona_gas,
  deleteBombona_gas,
} from "../Controllers/bombona_gas.controllers";

export const router = Router();

router.post("/", createBombona_gas);

router.get("/", getBombona_gas);

router.put("/:id", updateBombona_gas);

router.delete("/:id", deleteBombona_gas);
