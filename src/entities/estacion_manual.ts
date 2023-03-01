import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { Alarmas } from "./alarmas";
import { Bombero } from "./bombero";


@Entity("Estacion_manual")
export class Estacion_manual extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  estacion_clase: string;

  @Column({ type: "varchar",nullable:true })
  estacion_condicion: condicionvenEnum;

  @OneToMany(() => Alarmas, (alarmas) =>  alarmas.brand)
  alarmas:Alarmas[];

  
}
