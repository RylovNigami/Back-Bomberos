import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
import { Local } from "./local";

@Entity("Contrahuella")
export class Contrahuella extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  nombre_contrahuella: string;

  
  @ManyToOne(() => Local, (local) => local.contrahuella)
  local:Local;
}
