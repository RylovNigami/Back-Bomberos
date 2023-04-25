import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bombona_gas } from "./bombona_gas";
import { Local } from "./local";
import { Tanque_gas } from "./tanque_gas";

@Entity("Instalacion_gas")
export class Instalacion_gas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  suministro_bombona: boolean;

  @Column({ type: "varchar",nullable:true })
  ubic_valvulaBombona: string;


  @ManyToOne(() => Local, (local) => local.instalacion_gas,{eager:true})
  local:Local;

  @ManyToOne(() => Bombona_gas, (bombona_gas) => bombona_gas.instalacion_gas,{eager:true})
  bombona_gas:Bombona_gas;

  
  @ManyToOne(() => Tanque_gas, (tanque_gas) => tanque_gas.instalacion_gas,{eager:true})
  tanque_gas:Tanque_gas;

}
