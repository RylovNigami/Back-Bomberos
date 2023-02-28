import { BaseEntity, Column, Entity, OneToMany, OneToOne, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";
import { User } from "./user";
import { Inspeccion } from "./inspeccion";
import { Local } from "./local";

@Entity("LocalOwner")
export class LocalOwner extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  localOwnerFirstName: string;

  @Column({ type: "varchar" })
  localOwnerLastName: string;

  @Column({ type: "numeric", unique: true })
  localOwnerDni: number;

  @Column({ type: "varchar", nullable: true })
  localOwnerMail: string;
  
  @ManyToOne(() => Local, (local) =>  local.localOwner,{eager:true})
  local:Local;

}