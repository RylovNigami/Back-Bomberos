import { BaseEntity, Column, Entity, ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { condicionalarmaEnum } from "../enum/condicionalarma";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoalarmaEnum } from "../enum/tipoalarma";
import { tipodeteccionEnum } from "../enum/tipodeteccion";
import { Alarmas_local } from "./alarmas_local";
import { Local } from "./local";

@Entity("Alarmas")
export class Alarmas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean" })
  sistema_alarma: boolean;

  @Column({ type: "varchar" })
  sistema_deteccion: tipodeteccionEnum;

  @Column({ type: "varchar" })
  marca_alarma: string;

  @Column({ type: "varchar" })
  condiciones: condicionalarmaEnum;

  @Column({ type: "varchar" })
  tipo: tipoalarmaEnum;

  @Column({ type: "numeric" })
  numero_zona: number;

  @Column({ type: "boolean" })
  area_proteger: boolean;

  @Column({ type: "numeric" })
  calor: number;

  @Column({ type: "numeric" })
  humo_f: number;

  @Column({ type: "numeric" })
  humo_i: number;

  @Column({ type: "numeric" })
  combinado: number;

  @Column({ type: "boolean" })
  detectores_a: boolean;

  @OneToMany(() => Alarmas_local, (alarmas_local) => alarmas_local.alarmas)
  alarmas_local:Alarmas_local[];
}
