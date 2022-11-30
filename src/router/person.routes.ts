import { Router } from "express";
import {createPerson, getPerson,updatePerson,deletePerson} from "../Controllers/person.contollers";

export const router = Router()

router.post("/", createPerson);

router.get("/", getPerson);

router.put("/:id", updatePerson);

router.delete("/:id", deletePerson);
