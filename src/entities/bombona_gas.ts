import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Alarmas } from "./alarmas";
import { Bombero } from "./bombero";
import { Instalacion_gas } from "./instalacion_gas";


@Entity("Bombona_gas")
export class Bombona_gas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  cap_bombona: string;

  @Column({ type: "varchar",nullable:true })
  ubic_bombona: string;

  @Column({ type: "varchar",nullable:true })
  condicion_visualBombona: string;

  @Column({ type: "boolean",nullable:true })
  ventiladaBombona: boolean;  

  @Column({ type: "boolean",nullable:true })
  protegidaBombona: boolean;  


  @OneToMany(() => Instalacion_gas, (instalacion_gas) =>  instalacion_gas.bombona_gas)
  instalacion_gas:Instalacion_gas[];

  
}
