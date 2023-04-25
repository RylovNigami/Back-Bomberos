import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Alm_seguro")
export class Alm_seguro extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean",nullable:true })
  poseeAlamacenamiento: boolean;

  @Column({ type: "varchar",nullable:true })
  tipo_mercanciaAlmacenada: string;

  @Column({ type: "boolean",nullable:true })
  norma_almacenamiento: boolean;

  @Column({ type: "boolean",nullable:true })
  orden_limpieza: boolean;

  @Column({ type: "boolean",nullable:true })
  proteccion_contraIncendios: boolean;

  @Column({ type: "varchar",nullable:true })
  tipo_proteccionIncendio: string;

  @ManyToOne(() => Local, (local) => local.alm_seguro,{eager:true})
  local:Local;
}
