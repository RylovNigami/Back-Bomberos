import { DataSource } from "typeorm";
import 'dotenv/config';
import { User } from "./entities/user";
import { Person } from "./entities/person";
import { Alarmas } from "./entities/alarmas";
import { Alm_riesgoso } from "./entities/alm_riesgoso";
import { Alm_seguro } from "./entities/alm_seguro";
import { Bombero } from "./entities/bombero";
import { Caracteristica_local } from "./entities/caracteristica_local";
/*import { Cargo_bombero } from "./entities/cargo_bombero";*/
import { Cargo } from "./entities/cargo";
import { Contrahuella } from "./entities/contrahuella";
import { Departamento } from "./entities/departamento";
import { Electricidad } from "./entities/electricidad";
import { Escaleras } from "./entities/escaleras";
import { Estado } from "./entities/estado";
import { Extincion_f } from "./entities/extincion_f";
import { Extintor_p } from "./entities/extintor_p";
import { Huella } from "./entities/huella";
import { Inspeccion } from "./entities/inspeccion";
import { Instalacion_gas } from "./entities/instalacion_gas";
import { Local } from "./entities/local";
import { Medios_escape } from "./entities/medios_escape";
import { Municipio } from "./entities/municipio";
import { Paredes } from "./entities/paredes";
import { Parroquia } from "./entities/parroquia";
import { Pasamanos } from "./entities/pasamanos";
import { Pisos } from "./entities/pisos";
import { Plafones } from "./entities/plafones";
import { Puertas } from "./entities/puertas";
import { Rango } from "./entities/rango";
import { Techos } from "./entities/techos";
import { Ventanas } from "./entities/ventanas";
import { Extintor_local } from "./entities/extintor_local";
import { Medios_local } from "./entities/medios_local";
import { Extincion_local } from "./entities/extincion_local";


export const AppDataSource = new DataSource({
  type: `postgres`,
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  entities: [User,Person,Alarmas,Alm_riesgoso,Alm_seguro,Bombero,Caracteristica_local,Cargo,Contrahuella,
  Departamento,Electricidad,Escaleras,Estado,Extincion_f,Extincion_local,Extintor_p,Extintor_local,Huella,Inspeccion,Instalacion_gas,Local,Medios_escape,
  Medios_local,Municipio,Paredes,Parroquia,Pasamanos,Pisos,Plafones,Puertas,Rango,Techos,Ventanas],
  synchronize: true,
});
