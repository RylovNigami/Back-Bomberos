import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Alm_seguro")
export class Alm_seguro extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  tipo: string;

  @Column({ type: "boolean" })
  norma_alm: boolean;

  @Column({ type: "boolean" })
  orden_limpieza: boolean;

  @Column({ type: "boolean" })
  proteccion: boolean;

  @Column({ type: "varchar" })
  tipo_proteccion: string;

  @ManyToOne(() => Local, (local) => local.alm_seguro,{eager:true})
  local:Local;
}
