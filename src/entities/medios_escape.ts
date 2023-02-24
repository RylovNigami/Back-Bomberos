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
  ventilacion: boolean;

  @Column({ type: "varchar" })
  condicion_ven: condicionvenEnum;

  @Column({ type: "varchar" })
  tipo_ven: tipovenEnum;

  @Column({ type: "boolean" })
  cinta_anti: boolean;

  @Column({ type: "varchar" })
  sitio_cinta: string;

  @Column({ type: "boolean" })
  iluminacion: boolean;

  @Column({ type: "varchar" })
  tipo_lampara: string;

  @Column({ type: "numeric" })
  cantidad_lampara: number;

  @Column({ type: "boolean" })
  señalizacion: boolean;

  @Column({ type: "varchar" })
  tipo_señal: string;

  @Column({ type: "varchar" })
  pasillo: boolean;

  @Column({ type: "numeric" })
  nro_pasillo: number;

  @Column({ type: "varchar" })
  ancho_pasillo: string;

  @Column({ type: "boolean" })
  rampa: boolean;

  @Column({ type: "numeric" })
  angulo_rampa: number;

  @OneToMany(() => Medios_local, (medios_local) => medios_local.medios_escape)
  medios_local:Medios_escape[];
}
