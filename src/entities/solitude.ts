import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    
  @OneToMany(() => Local, (local) => local.solitude)
  local:Local[];

}