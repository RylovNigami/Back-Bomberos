import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";
import { User } from "./user";
import { Inspeccion } from "./inspeccion";
import { Local } from "./local";

@Entity("Interviewer")
export class Interviewer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  interviewerFirstName: string;

  @Column({ type: "varchar" })
  interviewerLastName: string;

  @Column({ type: "numeric"})
  interviewerDni: number;

  @Column({ type: "numeric"})
  interviewerNumber:number;

  
  @OneToMany(() => Local, (local) => local.interviewer)
  local:Local[];
}