import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoEscaleraEnum } from "../enum/tipoescalera";
import { Bombero } from "./bombero";
import { Medios_escape } from "./medios_escape";


@Entity("Escaleras_vias")
export class Escaleras_vias extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({ type: "varchar",nullable:true })
  condicion_escaleras: condicionvenEnum;

  @Column({ type: "varchar",nullable:true })
  tipo_escaleras: tipoEscaleraEnum;

  @Column({ type: "numeric",nullable:true })
  ancho_escalera: number;

  @Column({ type: "numeric",nullable:true })
  altura_pasamano: number;

  @Column({ type: "numeric",nullable:true })
  ancho_huella: number;

  @Column({ type: "numeric",nullable:true })
  altura_contrahuella: number;
  @OneToMany(() => Medios_escape, (medios_escape) =>  medios_escape.escaleras_vias)
  medios_escape:Medios_escape[];

  
}
