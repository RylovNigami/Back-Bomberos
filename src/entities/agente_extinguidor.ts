import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";
import { Extintor_local } from "./extintor_local";


@Entity("Agente_extinguidor")
export class Agente_extinguidor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_agenteExtinguidor: string;

  @OneToMany(() => Extintor_local, (extintor_local) =>  extintor_local.agente_extinguidor)
  extintor_local:Extintor_local[];

  
}
