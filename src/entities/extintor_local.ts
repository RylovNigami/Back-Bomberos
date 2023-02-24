import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { Extintor_p } from "./extintor_p";
  import { Local } from "./local";
  
  @Entity("Extintor_local")
  export class Extintor_local extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "numeric" })
    cant_portatil: number;
  
    @Column({ type: "varchar" })
    operativo_extintor: boolean;
  
    @Column({ type: "varchar" })
    tipo_extintor: string;
  
    @Column({ type: "varchar" })
    capacidad_extintor: string;
  
    @Column({ type: "varchar" })
    empresa: string;
  
    @Column({ type: "varchar" })
    reubicacion: boolean;

    @ManyToOne(() => Local, (local) => local.extintor_local,{eager:true})
    local:Local;

    @ManyToOne(() => Extintor_p, (extintor_p) => extintor_p.extintor_local,{eager:true})
    extintor_p:Extintor_p;
  }