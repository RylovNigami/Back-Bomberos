import { BaseEntity, Column, Entity, OneToMany, OneToOne,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";
import { User } from "./user";
import { Inspeccion } from "./inspeccion";
import { Local } from "./local";

@Entity("Solitude")
export class Solitude extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  solitudeFirstName: string;

  @Column({ type: "varchar" })
  solitudeLastName: string;

  @Column({ type: "numeric", unique: true })
  dniSolitude: number;

    
  @ManyToOne(() => Local, (local) =>  local.solitude,{eager:true})
  local:Local;



}