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

  @Column({ type: "boolean" })
  vias_escape: boolean;

  
  @Column({ type: "boolean" })
  escalera_vias: boolean;
   
  @Column({ type: "varchar" })
  condicion_escaleras: condicionvenEnum;

  @Column({ type: "varchar" })
  tipo_escaleras: tipoEscaleraEnum;

  @Column({ type: "numeric" })
  ancho_escalera: number;

  @Column({ type: "numeric" })
  altura_pasamano: number;

  @Column({ type: "numeric" })
  ancho_huella: number;

  @Column({ type: "numeric" })
  altura_contrahuella: number;

  @Column({ type: "varchar" })
  tipo_puertaviasEscape: string;

  @Column({ type: "boolean" })
  sentido_salida: boolean;

  @Column({ type: "varchar" })
  observacion_viasEscape: string;

  @Column({ type: "boolean" })
  ventilacion_viasEscape: boolean;

  @Column({ type: "varchar" })
  condicion_venviasEscape: condicionvenEnum;

  @Column({ type: "varchar" })
  tipo_venviasEscape: tipovenEnum;

  @Column({ type: "boolean" })
  cinta_antirresbalante: boolean;

  @Column({ type: "boolean",nullable:true })
  pasillos_circulacion: boolean;

  @Column({ type: "boolean",nullable:true })
  rampas_acceso: boolean;

  @Column({ type: "boolean",nullable:true })
  escaleras_cintaAntirresbalante: boolean;

  @Column({ type: "boolean" })
  iluminacion_emergencia: boolean;

  @Column({ type: "varchar" })
  tipo_lamparaEmergencia: string;

  @Column({ type: "numeric" })
  cantidad_lamparaEmergencia: number;

  @Column({ type: "boolean" })
  señalizacion_viasEscape: boolean;


  @Column({ type: "boolean",nullable:true })
  foto_iluminiscentes: boolean;

  @Column({ type: "boolean",nullable:true })
  reflectante_señalvias: boolean;

  @Column({ type: "boolean",nullable:true })
  convencionales_señalvias: boolean;

  @Column({ type: "varchar" })
  pasillo_viasEscape: boolean;

  @Column({ type: "numeric" })
  nro_pasilloviasEscape: number;

  @Column({ type: "varchar" })
  ancho_pasilloviasEscape: string;

  @Column({ type: "boolean" })
  rampa_viasEscape: boolean;

  @Column({ type: "numeric" })
  angulo_rampaEscape: number;

  @ManyToOne(() => Local, (local) => local.medios_escape,{eager:true})
  local:Local;
}
