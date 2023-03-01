import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StatusEnum } from "../enum/status";
import { tipoRespuestaEnum } from "../enum/tiporespuesta";
import { Bombero } from "./bombero";

import { Local } from "./local";
import { Person } from "./person";


@Entity("Inspeccion")
export class Inspeccion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean",nullable:true })
  existe_guia: boolean;

  @Column({ type: "varchar",unique:true })
  nro_inspeccion: number;

  @Column({ type: 'time',nullable:true})
  hora: string;

  @Column({ type: 'date',nullable:true })
  fecha: string;

  @Column({ type: "varchar",nullable:true})
  cumple_ordenamiento: string;

  @Column({ type: "varchar",nullable:true})
  observaciones_inspeccion: string;

  
  @Column({ type: "varchar",nullable:true})
  tipo_respuestaInspeccion: tipoRespuestaEnum;

  @ManyToOne(() => Bombero, (bombero) => bombero.inspeccion,{ eager:true})
  bombero:Bombero;

  @ManyToOne(() => Local, (local) => local.inspeccion,{ eager:true})
  local:Local;

}
