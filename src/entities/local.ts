import { BaseEntity, Column, Entity,OneToMany,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alarmas } from "./alarmas";
import { Alarmas_local } from "./alarmas_local";
import { Alm_riesgoso } from "./alm_riesgoso";
import { Alm_seguro } from "./alm_seguro";
import { Caracteristica_local } from "./caracteristica_local";
import { Contrahuella } from "./contrahuella";
import { Electricidad } from "./electricidad";
import { Escaleras } from "./escaleras";
import { Extincion_f } from "./extincion_f";
import { Extincion_local } from "./extincion_local";
import { Extintor_local } from "./extintor_local";
import { Extintor_p } from "./extintor_p";
import { Huella } from "./huella";
import { Inspeccion } from "./inspeccion";
import { Instalacion_gas } from "./instalacion_gas";
import { Interviewer } from "./interviewer";
import { LocalOwner } from "./localOwner";
import { Medios_escape } from "./medios_escape";
import { Medios_local } from "./medios_local";
import { Paredes } from "./paredes";
import { Parroquia } from "./parroquia";
import { Pasamanos } from "./pasamanos";
import { Pisos } from "./pisos";
import { Plafones } from "./plafones";
import { Puertas } from "./puertas";
import { Solitude } from "./solitude";
import { Techos } from "./techos";
import { Ventanas } from "./ventanas";

@Entity("Local")
export class Local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric"})
  rif: number;

  @Column({ type: "varchar",nullable:true })
  ubicacion: string;

  @Column({ type: "varchar",nullable:true })
  ocupacion: string;

  @Column({ type: "varchar"})
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

  @OneToMany(() => Escaleras, (escaleras) => escaleras.local)
  escaleras:Escaleras[];

  @OneToMany(() => Contrahuella, (contrahuella) => contrahuella.local)
  contrahuella:Contrahuella[];

  @OneToMany(() => Huella, (huella) => huella.local)
  huella:Huella[];

  @OneToMany(() => Paredes, (paredes) => paredes.local)
  paredes:Paredes[];

  @OneToMany(() => Pasamanos, (pasamanos) => pasamanos.local)
  pasamanos:Pasamanos[];

  @OneToMany(() => Pisos, (pisos) => pisos.local)
  pisos:Pisos[];

  @OneToMany(() => Plafones, (plafones) => plafones.local)
  plafones:Plafones[];

  @OneToMany(() => Puertas, (puertas) => puertas.local)
  puertas:Puertas[];

  @OneToMany(() => Techos, (techos) => techos.local)
  techos:Techos[];

  @OneToMany(() => Ventanas, (ventanas) => ventanas.local)
  ventanas:Ventanas[];

  @OneToMany(() => Medios_escape, (medios_escape) => medios_escape.local)
  medios_escape:Medios_escape[];

  @OneToMany(() => Alm_riesgoso, (alm_riesgoso) => alm_riesgoso.local)
  alm_riesgoso:Alm_seguro[];
  
  @OneToMany(() => Alarmas, (alarmas) => alarmas.local)
  alarmas:Alarmas[];

  @OneToMany(() => Extintor_local, (Extintor_local) => Extintor_local.local)
  extintor_local:Extintor_local[];
  
  @ManyToOne(() => Parroquia, (parroquia) =>  parroquia.local, {eager:true})
  parroquia:Parroquia;

  @OneToMany(() => Interviewer, (interviewer) => interviewer.local)
  interviewer:Interviewer[];

  @OneToMany(() => LocalOwner, (localOwner) => localOwner.local)
  localOwner:LocalOwner[];

  @OneToMany(() => Solitude, (solitude) => solitude.local)
  solitude:Solitude[];

  @OneToMany(() => Extincion_local, (extincion_local) => extincion_local.local)
  extincion_local:Extincion_local[];
}

