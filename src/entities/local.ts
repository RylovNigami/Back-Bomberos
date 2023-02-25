import { BaseEntity, Column, Entity,OneToMany,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alarmas } from "./alarmas";
import { Alm_riesgoso } from "./alm_riesgoso";
import { Alm_seguro } from "./alm_seguro";
import { Caracteristica_local } from "./caracteristica_local";
import { Electricidad } from "./electricidad";
import { Extincion_f } from "./extincion_f";
import { Extintor_local } from "./extintor_local";
import { Extintor_p } from "./extintor_p";
import { Inspeccion } from "./inspeccion";
import { Instalacion_gas } from "./instalacion_gas";
import { Interviewer } from "./interviewer";
import { LocalOwner } from "./localOwner";
import { Medios_escape } from "./medios_escape";
import { Parroquia } from "./parroquia";
import { Solitude } from "./solitude";

@Entity("Local")
export class Local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric",unique:true })
  rif: number;

  @Column({ type: "varchar" })
  ubicacion: string;

  @Column({ type: "varchar" })
  ocupacion: string;

  @Column({ type: "varchar",unique:true})
  firma_mercantil: string;


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

  @OneToMany(() => Extintor_local, (Extintor_local) => Extintor_local.local)
  extintor_local:Extintor_local[];

  @OneToMany(() => Extincion_f, (extincion_f) => extincion_f.local)
  extincion_f:Extincion_f[];

  
  @ManyToOne(() => Parroquia, (parroquia) =>  parroquia.local)
  parroquia:Parroquia;

  @ManyToOne(() => Interviewer, (interviewer) =>  interviewer.local,{eager:true})
  interviewer:Interviewer;

  @ManyToOne(() => LocalOwner, (localOwner) =>  localOwner.local,{eager:true})
  localOwner:LocalOwner;

  @ManyToOne(() => Solitude, (solitude) =>  solitude.local,{eager:true})
  solitude:Solitude;
}

