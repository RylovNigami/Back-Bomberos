import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StatusEnum } from "../enum/status";
import { Bombero } from "./bombero";

import { Local } from "./local";
import { Person } from "./person";


@Entity("Inspeccion")
export class Inspeccion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",unique:true })
  nro_inspeccion: number;

<<<<<<< HEAD
  @Column({ type: 'time'})
  hora: string;
=======
  @Column({ type: "time" })
  hora : Date;
>>>>>>> feat-fix/RylovNigami

  @Column({ type: 'date' })
  fecha: string;


  @ManyToOne(() => Bombero, (bombero) => bombero.inspeccion,{ eager:true})
  bombero:Bombero;

  @ManyToOne(() => Local, (local) => local.inspeccion,{ eager:true})
  local:Local;

}
