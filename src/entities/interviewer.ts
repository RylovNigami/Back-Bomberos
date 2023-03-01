import { BaseEntity, Column, Entity, OneToMany, OneToOne, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";
import { User } from "./user";
import { Inspeccion } from "./inspeccion";
import { Local } from "./local";

@Entity("Interviewer")
export class Interviewer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  interviewerFirstName: string;

  @Column({ type: "varchar",nullable:true })
  interviewerLastName: string;

  @Column({ type: "numeric",nullable:true})
  interviewerDni: number;

  @Column({ type: "numeric",nullable:true})
  interviewerNumber:number;

  @ManyToOne(() => Local, (local) =>  local.interviewer,{eager:true})
  local:Local;
}