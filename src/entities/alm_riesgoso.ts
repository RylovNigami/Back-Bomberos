import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Alm_riesgoso")
export class Alm_riesgoso extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  ident_material: boolean;

  @Column({ type: "varchar" })
  material_p: string;

  @Column({ type: "varchar" })
  tipo_contenedor: string;

  @Column({ type: "varchar" })
  cant_contenedor: string;

  @Column({ type: "varchar" })
  cap_contenedor: string;

  @Column({ type: "varchar" })
  ubic_contenedor: string;

  @Column({ type: "varchar" })
  ventilacion: boolean;

  @Column({ type: "varchar" })
  tipo_ven: string;

  @Column({ type: "varchar" })
  condicion_ven: boolean;

  @Column({ type: "varchar" })
  dique: boolean;

  @Column({ type: "varchar" })
  condicion_dique: boolean;

  @Column({ type: "varchar" })
  drenaje: boolean;

  @Column({ type: "varchar" })
  condicion_drenaje: boolean;

  @Column({ type: "varchar" })
  ident_riesgo: boolean;

  @Column({ type: "varchar" })
  seguridad_material: boolean;

  @Column({ type: "varchar" })
  kit_control: boolean;

  @Column({ type: "varchar" })
  condiciones_kit: boolean;

  @Column({ type: "varchar" })
  proteccion_personal: boolean;

  @Column({ type: "varchar" })
  condicion_proteccion: boolean;

  @Column({ type: "varchar" })
  racda: boolean;

  @Column({ type: "varchar" })
  nro_racda: string;

  @Column({ type: "varchar" })
  resquimic: boolean;

  @Column({ type: "varchar" })
  nro_resquimic: string;

  @Column({ type: "varchar" })
  daex: boolean;

  @Column({ type: "varchar" })
  nro_daex: string;

  @Column({ type: "varchar" })
  mppmp: boolean;

  @Column({ type: "varchar" })
  nro_mppmp: string;

  @Column({ type: "varchar" })
  ducha: boolean;

  @Column({ type: "varchar" })
  condicion_ducha: boolean;


  @ManyToOne(() => Local, (local) => local.alm_riesgoso,{eager:true})
  local:Local;
}
