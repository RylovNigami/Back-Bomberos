import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { tipovenEnum } from "../enum/tipoven";
import { Local } from "./local";
@Entity("Electricidad")
export class Electricidad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric",nullable:true })
  tension_tablero: number;

  @Column({ type: "varchar",nullable:true })
  material_tablero: string;

  @Column({ type: "boolean",nullable:true })
  canalizados_tablero: boolean;

  @Column({ type: "boolean",nullable:true })
  señalizacion_tablero: boolean;

  @Column({ type: "varchar",nullable:true })
  ubic_tablero: string;

  @Column({ type: "boolean",nullable:true})
  ventilacion_tablero: boolean;

  @Column({ type: "varchar",nullable:true })
  tipo_venTablero: tipovenEnum;

  @Column({ type: "varchar",nullable:true })
  tipo_interruptorTablero: string;

  @Column({ type: "boolean",nullable:true })
  requiere_tablero: boolean;

  @ManyToOne(() => Local, (local) => local.electricidad,{eager:true})
  local:Local;
}
