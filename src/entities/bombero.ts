import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person";
import { Rango } from "./rango";
import { Cargo_bombero } from "./cargo_bombero";

@Entity("Bombero")
export class Bombero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;



  @Column({ type: "varchar" })
  ordenGeneral: number;

  @Column({ type: "boolean" })
  genero: boolean;

  @Column({ type: "boolean" })
  status: boolean;

  
  @ManyToOne(() => Person, (person) =>  person.bombero,{eager:true})
  person:Person;

  
  @ManyToOne(() => Rango, (rango) =>  rango.bombero,{eager:true})
  rango:Rango;

  @OneToMany(() => Cargo_bombero, (cargo_bombero) =>  cargo_bombero.bombero)
  cargo_bombero:Cargo_bombero[];

}
