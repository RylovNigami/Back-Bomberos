import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person";
import { Rango } from "./rango";
import { Cargo } from "./cargo";
import { Departamento } from "./departamento";
import { Inspeccion } from "./inspeccion";

@Entity("Bombero")
export class Bombero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({ type: "varchar" })
  ordenGeneral: number;

  @Column({  type:"varchar",nullable:true})
  genero:string;
  
  @Column({ type: "boolean" })
  status: boolean;

  
  @ManyToOne(() => Person, (person) =>  person.bombero,{eager:true})
  person:Person;

  
  @ManyToOne(() => Rango, (rango) =>  rango.bombero,{eager:true})
  rango:Rango;

  @ManyToOne(() => Cargo, (cargo) =>  cargo.bombero,{eager:true})
  cargo:Cargo[];

  @ManyToOne(() => Departamento, (departamento) =>  departamento.bombero,{eager:true})
  departamento:Departamento[];


  @OneToMany(() => Inspeccion, (inspeccion) => inspeccion.bombero)
  inspeccion:Inspeccion[];
}
