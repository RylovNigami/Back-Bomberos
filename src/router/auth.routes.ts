import { Router } from "express";
import {
    loginCtrl, registerCtrl,logoutCtrl,authentication,meCtrl
   
  } from "../Controllers/auth.controller";

export const router = Router();

router.post("/login", loginCtrl);
router.post("/logout", logoutCtrl);
router.get("/me", authentication, meCtrl);

router.post("/register",registerCtrl);
