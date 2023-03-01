import { BaseEntity, Column, Entity,OneToMany,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pisos } from "./pisos";
import { Plafones } from "./plafones";
import { Puertas } from "./puertas";
import { Techos } from "./techos";
import { Ventanas } from "./ventanas";
import { Local } from "./local";
import { Huella } from "./huella";
import { Contrahuella } from "./contrahuella";
import { Escaleras } from "./escaleras";
import { Paredes } from "./paredes";
import { Pasamanos } from "./pasamanos";

@Entity("Caracteristica_local")
export class Caracteristica_local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "numeric",nullable:true })
  nro_niveles: number;

  @Column({ type: "numeric",nullable:true })
  nivel_inmueble: number;

  @Column({ type: "numeric",nullable:true })
  area_util: number;

  
  @ManyToOne(() => Local, (local) => local.caracteristica_local,{eager:true})
  local: Local;

  
}
