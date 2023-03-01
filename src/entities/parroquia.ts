import { BaseEntity, Column, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";
import { Municipio } from "./municipio";



@Entity("Parroquia")
export class Parroquia extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  nombre_parroquia: string;

      
  @ManyToOne(() => Municipio, (municipio) =>  municipio.parroquia)
  municipio:Municipio;

  @OneToMany(() => Local, (local) => local.parroquia)
  local:Local[];
}