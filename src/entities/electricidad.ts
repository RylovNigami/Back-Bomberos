import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";
@Entity("Electricidad")
export class Electricidad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  tension: string;

  @Column({ type: "varchar" })
  material_tablero: string;

  @Column({ type: "varchar" })
  señalizacion: boolean;

  @Column({ type: "varchar" })
  ventilacion: boolean;

  @Column({ type: "varchar" })
  tipo_ven: boolean;

  @Column({ type: "varchar" })
  tipo_interruptor: string;

  @ManyToOne(() => Local, (local) => local.electricidad,{eager:true})
  local:Local;
}
