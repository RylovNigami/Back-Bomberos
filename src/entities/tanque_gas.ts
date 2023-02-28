import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Alarmas } from "./alarmas";
import { Bombero } from "./bombero";
import { Instalacion_gas } from "./instalacion_gas";


@Entity("Tanque_gas")
export class Tanque_gas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  cap_tanque: string;

  @Column({ type: "varchar" })
  ubic_tanque: string;

  @Column({ type: "boolean" })
  aterramiento_tanqueGas: boolean;  

  @OneToMany(() => Instalacion_gas, (instalacion_gas) =>  instalacion_gas.tanque_gas)
  instalacion_gas:Instalacion_gas[];

  
}
