import { Router } from "express";
import {createUser, getUsers,updateUser,deleteUser} from "../Controllers/user.controllers";

export const router = Router()

router.post("/", createUser);

router.get("/", getUsers);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);
