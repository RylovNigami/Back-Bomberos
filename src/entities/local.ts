import { BaseEntity, Column, Entity,OneToMany,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alarmas } from "./alarmas";
import { Alm_riesgoso } from "./alm_riesgoso";
import { Alm_seguro } from "./alm_seguro";
import { Caracteristica_local } from "./caracteristica_local";
import { Electricidad } from "./electricidad";
import { Extincion_f } from "./extincion_f";
import { Extintor_p } from "./extintor_p";
import { Inspeccion } from "./inspeccion";
import { Instalacion_gas } from "./instalacion_gas";
import { Medios_escape } from "./medios_escape";
import { Parroquia } from "./parroquia";

@Entity("Local")
export class Local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric",unique:true })
  rif: number;

  @Column({ type: "varchar" ,nullable:true})
  ubicacion: string;

  @Column({ type: "varchar",unique:true })
  firma_mercantil: string;

  @ManyToOne(() => Parroquia, (parroquia) =>  parroquia.local)
  parroquia:Parroquia;

  @OneToMany(() => Inspeccion, (inspeccion) => inspeccion.local)
  inspeccion:Inspeccion[];

  @OneToMany(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.local)
  caracteristica_local:Caracteristica_local[];

  @OneToMany(() => Instalacion_gas, (instalacion_gas) => instalacion_gas.local)
  instalacion_gas:Instalacion_gas[];

  @OneToMany(() => Alm_seguro, (alm_seguro) => alm_seguro.local)
  alm_seguro:Alm_seguro[];

  
  @OneToMany(() => Electricidad, (electricidad) => electricidad.local)
  electricidad:Electricidad[];

  @OneToMany(() => Medios_escape, (medios_escape) => medios_escape.local)
  medios_escape:Medios_escape[];

  @OneToMany(() => Alm_riesgoso, (alm_riesgoso) => alm_riesgoso.local)
  alm_riesgoso:Alm_seguro[];
  
  @OneToMany(() => Alarmas, (alarmas) => alarmas.local)
  alarmas:Alarmas[];

  @OneToMany(() => Extintor_p, (Extintor_p) => Extintor_p.local)
  extintor_p:Extintor_p[];

  @OneToMany(() => Extincion_f, (extincion_f) => extincion_f.local)
  extincion_f:Extincion_f[];
}

