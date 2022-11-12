import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./router/user.router";
import personRouter from "./router/person.router";
import bomberoRouter from "./router/bombero.router";
import rangoRouter from "./router/rango.router";
import departamentoRouter from "./router/departamento.router";
import localRouter from "./router/local.router";

const app = express();

app.use(morgan(`dev`));
app.use(cors());
app.use(express.json());

app.use(userRouter);
app.use(personRouter);
app.use(bomberoRouter);
app.use(rangoRouter);
app.use(departamentoRouter);
app.use(localRouter);
export default app;
