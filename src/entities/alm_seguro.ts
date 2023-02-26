import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Alm_seguro")
export class Alm_seguro extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean" })
  poseeAlamacenamiento: boolean;

  @Column({ type: "varchar" })
  tipo_mercanciaAlmacenada: string;

  @Column({ type: "boolean" })
  norma_almacenamiento: boolean;

  @Column({ type: "boolean" })
  orden_limpieza: boolean;

  @Column({ type: "boolean" })
  proteccion_contraIncendios: boolean;

  @Column({ type: "varchar" })
  tipo_proteccionIncendio: string;

  @ManyToOne(() => Local, (local) => local.alm_seguro,{eager:true})
  local:Local;
}
