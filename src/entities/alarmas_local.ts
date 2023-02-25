import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { condicionalarmaEnum } from "../enum/condicionalarma";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoalarmaEnum } from "../enum/tipoalarma";
import { tipodeteccionEnum } from "../enum/tipodeteccion";
import { Alarmas } from "./alarmas";
import { Local } from "./local";

@Entity("Alarmas_local")
export class Alarmas_local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean" })
  estacion: boolean;

  @Column({ type: "varchar" })
  estacion_clase: string;

  @Column({ type: "varchar" })
  estacion_c: condicionvenEnum;

  @Column({ type: "boolean" })
  difusores_s: boolean;

  @Column({ type: "varchar" })
  difusores_c: condicionvenEnum;

  @Column({ type: "boolean" })
  cubren_a: boolean;


  @ManyToOne(() => Local, (local) => local.alarmas_local,{eager:true})
  local:Local;

  @ManyToOne(() => Alarmas, (alarmas) => alarmas.alarmas_local,{eager:true})
  alarmas:Alarmas;
}
