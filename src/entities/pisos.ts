import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
import { Local } from "./local";

@Entity("Pisos")
export class Pisos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_pisos: string;

  @ManyToOne(() => Local, (local) => local.pisos)
  local:Local;
}
