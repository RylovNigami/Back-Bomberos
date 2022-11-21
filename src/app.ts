import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./router/user.router";
import personRouter from "./router/person.router";
import bomberoRouter from "./router/bombero.router";
import rangoRouter from "./router/rango.router";
import departamentoRouter from "./router/departamento.router";
import localRouter from "./router/local.router";
import estadoRouter from "./router/estado.router";
import municipioRouter from "./router/municipio.router";
import parroquiaRouter from "./router/parroquia.router";
import cargoRouter from "./router/cargo.router";

const app = express();

app.use(morgan(`dev`));
app.use(cors());
app.use(express.json());
// rotas
app.use(userRouter);
app.use(personRouter);
app.use(bomberoRouter);
app.use(rangoRouter);
app.use(cargoRouter);
app.use(departamentoRouter);
app.use(localRouter);
app.use(estadoRouter);
app.use(municipioRouter);
app.use(parroquiaRouter);

export default app;
