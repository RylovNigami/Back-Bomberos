import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { tipovenEnum } from "../enum/tipoven";
import { Local } from "./local";
@Entity("Electricidad")
export class Electricidad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric" })
  tension: number;

  @Column({ type: "varchar" })
  material_tablero: string;

  @Column({ type: "boolean" })
  canalizados: boolean;

  @Column({ type: "boolean" })
  señalizacion: boolean;

  @Column({ type: "varchar" })
  ubic_tablero: string;

  @Column({ type: "boolean" })
  ventilacion: boolean;

  @Column({ type: "varchar" })
  tipo_ven: tipovenEnum;

  @Column({ type: "varchar" })
  tipo_interruptor: string;

  @ManyToOne(() => Local, (local) => local.electricidad,{eager:true})
  local:Local;
}
