import { BaseEntity, Column, Entity, ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { Extincion_local } from "./extincion_local";
import { Local } from "./local";

@Entity("Extincion_f")
export class Extincion_f extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean",nullable:true })
  extincion_fija: boolean;

  @Column({ type: "boolean",nullable:true })
  operativo_extincionFija: boolean;

  @Column({ type: "numeric",nullable:true })
  capacidad_tanqueExtincion: number;

  @Column({ type: "varchar",nullable:true })
  ubic_tanqueExtincion: string;

  @Column({ type: "boolean",nullable:true })
  cajetines_mangueras: boolean;

  @Column({ type: "numeric",nullable:true })
  cantidad_cajetinesManguera: number;

  @Column({ type: "boolean",nullable:true })
  mangueras: boolean;

  @Column({ type: "boolean",nullable:true })
  rociadores: boolean;

  @Column({ type: "boolean",nullable:true })
  cubre_areaRociadores: boolean;

  
  @OneToMany(() => Extincion_local, (extincion_local) => extincion_local.extincion_f)
  extincion_local:Extincion_local[];
}
