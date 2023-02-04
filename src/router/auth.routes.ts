import { Router } from "express";
import {
    loginCtrl, registerCtrl
   
  } from "../Controllers/auth.controller";

export const router = Router();

router.post("/login",loginCtrl);

router.post("/register",registerCtrl);
