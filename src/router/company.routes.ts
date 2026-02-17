import { Router } from "express";
import {createCompany,getCompany,updateCompany,deleteCompany} from "../Controllers/company.controllers";

export const router = Router();

router.post("/", createCompany);

router.get("/", getCompany);

router.put("/:id", updateCompany);

router.delete("/:id", deleteCompany);
