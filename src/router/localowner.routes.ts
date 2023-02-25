import { Router } from "express";
import {createLocalOwner, getLocalOwner,updateLocalOwner,deleteLocalOwner} from "../Controllers/localowner.controllers";

export const router = Router()

router.post("/", createLocalOwner);

router.get("/", getLocalOwner);

router.put("/:id", updateLocalOwner);

router.delete("/:id", deleteLocalOwner);
