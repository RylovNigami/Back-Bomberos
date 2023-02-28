import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { tipovenEnum } from "../enum/tipoven";
import { Local } from "./local";
@Entity("Electricidad")
export class Electricidad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric",nullable:true })
  tension_tablero: number;

  @Column({ type: "varchar" })
  material_tablero: string;

  @Column({ type: "boolean" })
  canalizados_tablero: boolean;

  @Column({ type: "boolean" })
  señalizacion_tablero: boolean;

  @Column({ type: "varchar" })
  ubic_tablero: string;

  @Column({ type: "boolean" })
  ventilacion_tablero: boolean;

  @Column({ type: "varchar" })
  tipo_venTablero: tipovenEnum;

  @Column({ type: "varchar" })
  tipo_interruptorTablero: string;

  @ManyToOne(() => Local, (local) => local.electricidad,{eager:true})
  local:Local;
}
