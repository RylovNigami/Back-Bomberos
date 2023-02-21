import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Alm_riesgoso")
export class Alm_riesgoso extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean" })
  ident_material: boolean;

  @Column({ type: "varchar" })
  material_p: string;

  @Column({ type: "varchar" })
  tipo_contenedor: string;

  @Column({ type: "numeric" })
  cant_contenedor: number;

  @Column({ type: "varchar" })
  cap_contenedor: string;

  @Column({ type: "varchar" })
  ubic_contenedor: string;

  @Column({ type: "boolean" })
  ventilacion: boolean;

  @Column({ type: "varchar" })
  tipo_ven: string;

  @Column({ type: "boolean" })
  condicion_ven: boolean;

  @Column({ type: "boolean" })
  dique: boolean;

  @Column({ type: "boolean" })
  condicion_dique: boolean;

  @Column({ type: "boolean" })
  drenaje: boolean;

  @Column({ type: "boolean" })
  condicion_drenaje: boolean;

  @Column({ type: "boolean" })
  ident_riesgo: boolean;

  @Column({ type: "boolean" })
  seguridad_material: boolean;

  @Column({ type: "varchar" })
  kit_control: boolean;

  @Column({ type: "boolean" })
  condiciones_kit: boolean;

  @Column({ type: "boolean" })
  proteccion_personal: boolean;

  @Column({ type: "boolean" })
  condicion_proteccion: boolean;

  @Column({ type: "boolean" })
  racda: boolean;

  @Column({ type: "numeric" })
  nro_racda: number;

  @Column({ type: "boolean" })
  resquimic: boolean;

  @Column({ type: "numeric" })
  nro_resquimic: number;

  @Column({ type: "boolean" })
  daex: boolean;

  @Column({ type: "numeric" })
  nro_daex: number;

  @Column({ type: "boolean" })
  mppmp: boolean;

  @Column({ type: "numeric" })
  nro_mppmp: number;

  @Column({ type: "boolean" })
  ducha: boolean;

  @Column({ type: "boolean" })
  condicion_ducha: boolean;


  @ManyToOne(() => Local, (local) => local.alm_riesgoso,{eager:true})
  local:Local;
}
