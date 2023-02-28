import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
import { Local } from "./local";

@Entity("Techos")
export class Techos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_techos: string;

  @ManyToOne(() => Local, (local) => local.techos)
  local:Local;
}
