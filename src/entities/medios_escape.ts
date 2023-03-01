import { BaseEntity, Column, Entity,ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoEscaleraEnum } from "../enum/tipoescalera";
import { tipovenEnum } from "../enum/tipoven";
import { Local } from "./local";
import { Medios_local } from "./medios_local";

@Entity("Medios_escape")
export class Medios_escape extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean",nullable:true })
  vias_escape: boolean;

  
  @Column({ type: "boolean",nullable:true })
  escalera_vias: boolean;
   
  @Column({ type: "varchar",nullable:true })
  condicion_escaleras: condicionvenEnum;

  @Column({ type: "varchar",nullable:true })
  tipo_escaleras: tipoEscaleraEnum;

  @Column({ type: "numeric",nullable:true })
  ancho_escalera: number;

  @Column({ type: "numeric",nullable:true })
  altura_pasamano: number;

  @Column({ type: "numeric",nullable:true })
  ancho_huella: number;

  @Column({ type: "numeric",nullable:true })
  altura_contrahuella: number;

  @Column({ type: "varchar",nullable:true })
  tipo_puertaviasEscape: string;

  @Column({ type: "boolean",nullable:true })
  sentido_salida: boolean;

  @Column({ type: "varchar",nullable:true })
  observacion_viasEscape: string;

  @Column({ type: "boolean",nullable:true })
  ventilacion_viasEscape: boolean;

  @Column({ type: "varchar",nullable:true })
  condicion_venviasEscape: condicionvenEnum;

  @Column({ type: "varchar",nullable:true })
  tipo_venviasEscape: tipovenEnum;

  @Column({ type: "boolean",nullable:true })
  cinta_antirresbalante: boolean;

  @Column({ type: "boolean",nullable:true })
  pasillos_circulacion: boolean;

  @Column({ type: "boolean",nullable:true })
  rampas_acceso: boolean;

  @Column({ type: "boolean",nullable:true })
  escaleras_cintaAntirresbalante: boolean;

  @Column({ type: "boolean",nullable:true })
  iluminacion_emergencia: boolean;

  @Column({ type: "varchar",nullable:true })
  tipo_lamparaEmergencia: string;

  @Column({ type: "numeric",nullable:true })
  cantidad_lamparaEmergencia: number;

  @Column({ type: "boolean",nullable:true })
  señalizacion_viasEscape: boolean;


  @Column({ type: "boolean",nullable:true })
  foto_iluminiscentes: boolean;

  @Column({ type: "boolean",nullable:true })
  reflectante_señalvias: boolean;

  @Column({ type: "boolean",nullable:true })
  convencionales_señalvias: boolean;

  @Column({ type: "varchar",nullable:true })
  pasillo_viasEscape: boolean;

  @Column({ type: "numeric",nullable:true })
  nro_pasilloviasEscape: number;

  @Column({ type: "varchar",nullable:true })
  ancho_pasilloviasEscape: string;

  @Column({ type: "boolean",nullable:true })
  rampa_viasEscape: boolean;

  @Column({ type: "numeric",nullable:true })
  angulo_rampaEscape: number;

  @ManyToOne(() => Local, (local) => local.medios_escape,{eager:true})
  local:Local;
}
