import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
import { Local } from "./local";

@Entity("Escaleras")
export class Escaleras extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_escaleras: string;

  @ManyToOne(() => Local, (local) => local.escaleras)
  local:Local;
}
