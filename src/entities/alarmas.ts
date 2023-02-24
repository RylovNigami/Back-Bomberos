import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { condicionalarmaEnum } from "../enum/condicionalarma";
import { tipoalarmaEnum } from "../enum/tipoalarma";
import { tipodeteccionEnum } from "../enum/tipodeteccion";
import { Local } from "./local";

@Entity("Alarmas")
export class Alarmas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean" })
  sistema_alarma: boolean;

  @Column({ type: "boolean" })
  sistema_deteccion: tipodeteccionEnum;

  @Column({ type: "varchar" })
  marca_alarma: string;

  @Column({ type: "boolean" })
  condiciones: condicionalarmaEnum;

  @Column({ type: "boolean" })
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

  @Column({ type: "boolean" })
  estacion: boolean;

  @Column({ type: "varchar" })
  estacion_clase: string;

  @Column({ type: "varchar" })
  estacion_c: boolean;

  @Column({ type: "varchar" })
  difusores_s: boolean;

  @Column({ type: "varchar" })
  difusores_c: boolean;

  @Column({ type: "varchar" })
  cubren_a: boolean;


  @ManyToOne(() => Local, (local) => local.alarmas,{eager:true})
  local:Local;
}
