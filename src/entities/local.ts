import { BaseEntity, Column, Entity,OneToMany,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Alm_riesgoso } from "./alm_riesgoso";
import { Alm_seguro } from "./alm_seguro";
import { Caracteristica_local } from "./caracteristica_local";
import { Electricidad } from "./electricidad";
import { Inspeccion } from "./inspeccion";
import { Instalacion_gas } from "./instalacion_gas";
import { Medios_escape } from "./medios_escape";
import { Parroquia } from "./parroquia";

@Entity("Local")
export class Local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  rif: number;

  @Column({ type: "varchar" })
  ubicacion: string;

  @Column({ type: "varchar" })
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
  
  
}

