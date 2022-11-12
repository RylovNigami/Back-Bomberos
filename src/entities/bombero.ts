import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person";
import { Rango } from "./rango";

@Entity("Bombero")
export class Bombero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_rango: string;

  @Column({ type: "varchar" })
  ordenGeneral: number;

  @Column({ type: "boolean" })
  status: boolean;

  
  @ManyToOne(() => Person, (person) =>  person.bombero)
  person:Person;

  
  @ManyToOne(() => Rango, (rango) =>  rango.bombero)
  rango:Rango;



}
