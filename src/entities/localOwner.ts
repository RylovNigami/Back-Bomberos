import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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
  
    
  @OneToMany(() => Local, (local) => local.localOwner)
  local:Local[];
}