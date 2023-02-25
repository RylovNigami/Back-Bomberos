import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";

import { Local } from "./local";
import { Person } from "./person";


@Entity("Inspeccion")
export class Inspeccion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",unique:true })
  nro_inspeccion: number;

  @Column({ type: 'time'})
  hora: string;

  @Column({ type: 'date' })
  fecha: string;

  @ManyToOne(() => Bombero, (bombero) => bombero.inspeccion,{ eager:true})
  bombero:Bombero;

  @ManyToOne(() => Local, (local) => local.inspeccion,{ eager:true})
  local:Local;

}
