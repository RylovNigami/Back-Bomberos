import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
import { Local } from "./local";

@Entity("Puertas")
export class Puertas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_puertas: string;

  @Column({ type: "boolean",nullable:true })
  resistencia: boolean;

  @ManyToOne(() => Local, (local) => local.puertas)
  local:Local;
}
