import { Router } from "express";
import {createHuella,getHuella,updateHuella,deleteHuella} from "../Controllers/huella.controllers";

export const router = Router()

router.post("/", createHuella);

router.get("/", getHuella);

router.put("/:id", updateHuella);

router.delete("/:id", deleteHuella);
