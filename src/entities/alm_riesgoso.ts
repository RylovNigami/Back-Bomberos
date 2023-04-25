import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipovenEnum } from "../enum/tipoven";
import { Local } from "./local";

@Entity("Alm_riesgoso")
export class Alm_riesgoso extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean",nullable:true })
  mapel: boolean;

  @Column({ type: "boolean",nullable:true })
  ident_material: boolean;

  @Column({ type: "varchar",nullable:true })
  material_predominante: string;

  @Column({ type: "varchar",nullable:true })
  tipo_contenedor: string;

  @Column({ type: "numeric",nullable:true })
  cant_contenedor: number;

  @Column({ type: "varchar",nullable:true })
  cap_contenedor: string;

  @Column({ type: "varchar",nullable:true })
  ubic_contenedor: string;

  @Column({ type: "boolean",nullable:true })
  ventilacion_almRiesgosa: boolean;

  @Column({ type: "varchar",nullable:true })
  tipo_venRiesgosa: tipovenEnum;

  @Column({ type: "boolean",nullable:true })
  condicion_venRiegosa: condicionvenEnum;

  @Column({ type: "boolean",nullable:true })
  dique: boolean;

  @Column({ type: "boolean",nullable:true })
  condicion_dique: condicionvenEnum;

  @Column({ type: "boolean",nullable:true })
  drenaje: boolean;

  @Column({ type: "boolean",nullable:true })
  condicion_drenaje: condicionvenEnum;

  @Column({ type: "boolean",nullable:true })
  ident_riesgo: boolean;

  @Column({ type: "boolean",nullable:true })
  seguridad_material: boolean;

  @Column({ type: "varchar",nullable:true })
  kit_control: boolean;

  @Column({ type: "boolean",nullable:true })
  condiciones_kit: condicionvenEnum;

  @Column({ type: "boolean",nullable:true })
  proteccion_personal: boolean;

  @Column({ type: "boolean",nullable:true })
  condicion_proteccion: condicionvenEnum;

  @Column({ type: "boolean",nullable:true })
  racda: boolean;

  @Column({ type: "numeric",nullable:true })
  nro_racda: number;

  @Column({ type: "boolean",nullable:true })
  resquimic: boolean;

  @Column({ type: "numeric",nullable:true })
  nro_resquimic: number;

  @Column({ type: "boolean",nullable:true })
  daex: boolean;

  @Column({ type: "numeric",nullable:true })
  nro_daex: number;

  @Column({ type: "boolean",nullable:true })
  mppmp: boolean;

  @Column({ type: "numeric",nullable:true })
  nro_mppmp: number;

  @Column({ type: "boolean",nullable:true })
  ducha: boolean;

  @Column({ type: "boolean",nullable:true })
  condicion_ducha: condicionvenEnum;


  @ManyToOne(() => Local, (local) => local.alm_riesgoso,{eager:true})
  local:Local;
}
