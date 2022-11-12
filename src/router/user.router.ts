import { Router } from "express";
import {createUser, getUsers,updateUser,deleteUser} from "../Controllers/user.controllers";

const router = Router()

router.post("/user",createUser);

router.get("/user",getUsers);

router.put("/user/:id",updateUser);

router.delete("/user/:id",deleteUser);

export default router;
