import { Router } from "express";
import {createPerson, getPerson,updatePerson,deletePerson} from "../Controllers/person.contollers";

const router = Router()

router.post("/person",createPerson);

router.get("/person",getPerson);

router.put("/persons/:id",updatePerson);

router.delete("/persons/:id",deletePerson);
export default router;
