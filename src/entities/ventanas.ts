import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
import { Local } from "./local";

@Entity("Ventanas")
export class Ventanas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_ventanas: string;


  @ManyToOne(() => Local, (local) => local.ventanas)
  local:Local;
}
