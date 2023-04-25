import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { condicionalarmaEnum } from "../enum/condicionalarma";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoalarmaEnum } from "../enum/tipoalarma";
import { tipodeteccionEnum } from "../enum/tipodeteccion";
import { Alarmas } from "./alarmas";
import { Local } from "./local";

@Entity("Alarmas_local")
export class Alarmas_local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

 

}
