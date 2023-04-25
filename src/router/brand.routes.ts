import { Router } from "express";
import {createBrand,getBrand,updateBrand,deleteBrand} from "../Controllers/brand.controllers";

export const router = Router();

router.post("/", createBrand);

router.get("/", getBrand);

router.put("/:id", updateBrand);

router.delete("/:id", deleteBrand);
