import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { Agente_extinguidor } from "./agente_extinguidor";
import { Company } from "./company";
import { Extintor_p } from "./extintor_p";
  import { Local } from "./local";
  
  @Entity("Extintor_local")
  export class Extintor_local extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: "varchar" })
    operativo_extintorPortatil: boolean;
  
    @Column({ type: "varchar" })
    capacidad_extintorPortatil: string;

    @Column({ type: "varchar" })
    reubicacion_extintorPortatil: boolean;

    @ManyToOne(() => Local, (local) => local.extintor_local,{eager:true})
    local:Local;

    @ManyToOne(() => Extintor_p, (extintor_p) => extintor_p.extintor_local,{eager:true})
    extintor_p:Extintor_p;

    @ManyToOne(() => Company, (company) => company.extintor_local,{eager:true})
    company:Company;

    @ManyToOne(() => Agente_extinguidor, (agente_extinguidor) => agente_extinguidor.extintor_local,{eager:true})
    agente_extinguidor:Agente_extinguidor;
  }