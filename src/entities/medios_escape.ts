import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Medios_escape")
export class Medios_escape extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  vias_escape: boolean;

  
  @Column({ type: "varchar" })
  escalera_vias: boolean;

  @Column({ type: "varchar" })
  ancho_escalera: string;

  @Column({ type: "varchar" })
  altura_pasamano: string;

  @Column({ type: "varchar" })
  ancho_huella: string;

  @Column({ type: "varchar" })
  altura_contrahuella: string;

  @Column({ type: "varchar" })
  tipo_puerta: string;

  @Column({ type: "varchar" })
  sentido_salida: boolean;

  @Column({ type: "varchar" })
  observacion: string;

  @Column({ type: "varchar" })
  ventilacion: boolean;

  @Column({ type: "varchar" })
  cinta_anti: boolean;

  @Column({ type: "varchar" })
  sitio_cinta: string;

  @Column({ type: "varchar" })
  iluminacion: boolean;

  @Column({ type: "varchar" })
  tipo_lampara: string;

  @Column({ type: "varchar" })
  cantidad_lampara: string;

  @Column({ type: "varchar" })
  señalizacion: boolean;

  @Column({ type: "varchar" })
  tipo_señal: string;

  @Column({ type: "varchar" })
  pasillo: boolean;

  @Column({ type: "varchar" })
  nro_pasillo: string;

  @Column({ type: "varchar" })
  ancho_pasillo: string;

  @Column({ type: "varchar" })
  rampa: boolean;

  @Column({ type: "varchar" })
  angulo_rampa: string;

  @ManyToOne(() => Local, (local) => local.medios_escape,{eager:true})
  local:Local;
}
