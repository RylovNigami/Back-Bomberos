import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Alarmas } from "./alarmas";
import { Bombero } from "./bombero";
import { Instalacion_gas } from "./instalacion_gas";


@Entity("Bombona_gas")
export class Bombona_gas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  cap_bombona: string;

  @Column({ type: "varchar" })
  ubic_bombona: string;

  @Column({ type: "varchar" })
  condicion_visualBombona: string;

  @Column({ type: "boolean" })
  ventiladaBombona: boolean;  

  @Column({ type: "boolean" })
  protegidaBombona: boolean;  


  @OneToMany(() => Instalacion_gas, (instalacion_gas) =>  instalacion_gas.bombona_gas)
  instalacion_gas:Instalacion_gas[];

  
}
