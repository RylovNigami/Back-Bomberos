import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoEscaleraEnum } from "../enum/tipoescalera";
import { Extintor_p } from "./extintor_p";
  import { Local } from "./local";
import { Medios_escape } from "./medios_escape";
  
  @Entity("Medios_local")
  export class Medios_local extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;


 
 
  }