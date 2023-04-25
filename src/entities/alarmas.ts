import { BaseEntity, Column, Entity, ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { condicionalarmaEnum } from "../enum/condicionalarma";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoalarmaEnum } from "../enum/tipoalarma";
import { tipodeteccionEnum } from "../enum/tipodeteccion";
import { Alarmas_local } from "./alarmas_local";
import { Brand } from "./brand";
import { Difusores } from "./difusores";
import { Estacion_manual } from "./estacion_manual";
import { Local } from "./local";

@Entity("Alarmas")
export class Alarmas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean",nullable:true })
  sistema_alarma: boolean;

  @Column({ type: "varchar",nullable:true })
  sistema_deteccion: tipodeteccionEnum;

  @Column({ type: "varchar",nullable:true })
  condiciones_alarmas: condicionalarmaEnum;

  @Column({ type: "varchar",nullable:true })
  tipo_deteccion: tipoalarmaEnum;

  @Column({ type: "numeric",nullable:true })
  nro_zonaAlarma: number;

  @Column({ type: "boolean",nullable:true })
  area_protegerDeteccion: boolean;

  @Column({ type: "numeric",nullable:true })
  calor: number;

  @Column({ type: "numeric",nullable:true })
  humo_f: number;

  @Column({ type: "numeric",nullable:true })
  humo_i: number;

  @Column({ type: "numeric",nullable:true })
  combinado: number;

  @Column({ type: "boolean",nullable:true })
  detectores_area: boolean;

  @Column({ type: "boolean",nullable:true })
  difusores_sonido: boolean;

  @Column({ type: "boolean",nullable:true })
  estacion_manual: boolean;


  @ManyToOne(() => Local, (local) => local.alarmas,{eager:true})
  local:Local;

  @ManyToOne(() => Brand, (brand) =>  brand.alarmas,{eager:true})
  brand:Brand;

  @OneToMany(() => Estacion_manual, (estacion_manual) =>  estacion_manual.alarmas)
  estacion:Estacion_manual[];

  @OneToMany(() => Difusores, (difusores) =>  difusores.alarmas)
  difusores:Difusores[];
}
