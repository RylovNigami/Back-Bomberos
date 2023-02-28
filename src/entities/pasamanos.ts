import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
import { Local } from "./local";
@Entity("Pasamanos")
export class Pasamanos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_pasamanos: string;

  @ManyToOne(() => Local, (local) => local.pasamanos)
  local:Local;
}
