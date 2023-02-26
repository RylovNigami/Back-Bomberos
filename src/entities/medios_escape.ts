import { BaseEntity, Column, Entity,ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
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
  ventilacion_viasEscape: boolean;

  @Column({ type: "varchar" })
  condicion_venviasEscape: condicionvenEnum;

  @Column({ type: "varchar" })
  tipo_venviasEscape: tipovenEnum;

  @Column({ type: "boolean" })
  cinta_antirresbalante: boolean;

  @Column({ type: "varchar" })
  sitio_cintaAntirresbalante: string;

  @Column({ type: "boolean" })
  iluminacion_emergencia: boolean;

  @Column({ type: "varchar" })
  tipo_lamparaEmergencia: string;

  @Column({ type: "numeric" })
  cantidad_lamparaEmergencia: number;

  @Column({ type: "boolean" })
  señalizacion_viasEscape: boolean;

  @Column({ type: "varchar" })
  tipo_señalviasEscape: string;

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

  @OneToMany(() => Medios_local, (medios_local) => medios_local.medios_escape)
  medios_local:Medios_escape[];
}
