import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipovenEnum } from "../enum/tipoven";
import { Local } from "./local";

@Entity("Alm_riesgoso")
export class Alm_riesgoso extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean" })
  mapel: boolean;

  @Column({ type: "boolean" })
  ident_material: boolean;

  @Column({ type: "varchar" })
  material_predominante: string;

  @Column({ type: "varchar" })
  tipo_contenedor: string;

  @Column({ type: "numeric" })
  cant_contenedor: number;

  @Column({ type: "varchar" })
  cap_contenedor: string;

  @Column({ type: "varchar" })
  ubic_contenedor: string;

  @Column({ type: "boolean" })
  ventilacion_almRiesgosa: boolean;

  @Column({ type: "varchar" })
  tipo_venRiesgosa: tipovenEnum;

  @Column({ type: "boolean" })
  condicion_venRiegosa: condicionvenEnum;

  @Column({ type: "boolean" })
  dique: boolean;

  @Column({ type: "boolean" })
  condicion_dique: condicionvenEnum;

  @Column({ type: "boolean" })
  drenaje: boolean;

  @Column({ type: "boolean" })
  condicion_drenaje: condicionvenEnum;

  @Column({ type: "boolean" })
  ident_riesgo: boolean;

  @Column({ type: "boolean" })
  seguridad_material: boolean;

  @Column({ type: "varchar" })
  kit_control: boolean;

  @Column({ type: "boolean" })
  condiciones_kit: condicionvenEnum;

  @Column({ type: "boolean" })
  proteccion_personal: boolean;

  @Column({ type: "boolean" })
  condicion_proteccion: condicionvenEnum;

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
  condicion_ducha: condicionvenEnum;


  @ManyToOne(() => Local, (local) => local.alm_riesgoso,{eager:true})
  local:Local;
}
