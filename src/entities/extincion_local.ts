import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { Extincion_f } from "./extincion_f";
import { Local } from "./local";

@Entity("Extincion_local")
export class Extincion_local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  condicion_manguera: condicionvenEnum;

  @Column({ type: "numeric",nullable:true })
  longitud_manguera: number;

  @Column({ type: "numeric",nullable:true })
  diametro_manguera: number;

  @Column({ type: "boolean",nullable:true })
  area_protegerMangueras: boolean;


  @ManyToOne(() => Local, (local) => local.extincion_local,{eager:true})
  local:Local;

  @ManyToOne(() => Extincion_f, (extincion_f) => extincion_f.extincion_local,{eager:true})
  extincion_f:Extincion_f;
}
