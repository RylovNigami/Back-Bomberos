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

  @Column({ type: "boolean" })
  mangueras: boolean;

  @Column({ type: "boolean" })
  condicion_m: condicionvenEnum;

  @Column({ type: "numeric" })
  longitud: number;

  @Column({ type: "numeric" })
  diametro: number;

  @Column({ type: "boolean" })
  area_protegerf: boolean;

  @Column({ type: "boolean" })
  rociadores: boolean;

  @Column({ type: "boolean" })
  cubre_area: boolean;

  @ManyToOne(() => Local, (local) => local.extincion_local,{eager:true})
  local:Local;

  @ManyToOne(() => Extincion_f, (extincion_f) => extincion_f.extincion_local,{eager:true})
  extincion_f:Extincion_f;
}
