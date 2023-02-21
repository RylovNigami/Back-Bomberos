import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cargo_bombero } from "./cargo_bombero";
import { Local } from "./local";
import { Person } from "./person";


@Entity("Inspeccion")
export class Inspeccion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",unique:true })
  nro_inspeccion: number;

  @Column({ type: "date" })
  hora : Date;

  @Column({ type: "date" })
  fecha: Date;

  @ManyToOne(() => Cargo_bombero, (cargo_bombero) => cargo_bombero.inspeccion,{ eager:true})
  cargo_bombero:Cargo_bombero;

  @ManyToOne(() => Local, (local) => local.inspeccion,{ eager:true})
  local:Local;

   
  @ManyToOne(() => Person, (person) =>  person.inspeccion,{ eager:true})
  person:Person;

}
