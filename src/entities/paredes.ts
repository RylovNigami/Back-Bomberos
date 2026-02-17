import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
import { Local } from "./local";
@Entity("Paredes")
export class Paredes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  nombre_paredes: string;

  @ManyToOne(() => Local, (local) => local.paredes)
  local:Local;
}
