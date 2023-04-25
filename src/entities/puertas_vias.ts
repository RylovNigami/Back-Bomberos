import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoEscaleraEnum } from "../enum/tipoescalera";
import { Bombero } from "./bombero";
import { Medios_escape } from "./medios_escape";


@Entity("Puertas_vias")
export class Puertas_vias extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  tipo_puertaviasEscape: string;

  @Column({ type: "boolean",nullable:true })
  sentido_salida: boolean;

  @Column({ type: "varchar",nullable:true })
  observacion_viasEscape: string;

  @ManyToOne(() => Medios_escape, (medios_escape) =>  medios_escape.puertas_vias,{eager:true})
  medios_escape:Medios_escape[];

  
}
