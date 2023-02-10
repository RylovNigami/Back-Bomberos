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

  @Column({ type: "varchar" })
  nro_niveles: string;

  @Column({ type: "varchar" })
  nivel_inmueble: string;

  @Column({ type: "varchar" })
  area: string;

  @ManyToOne(() => Puertas, (puertas) => puertas.carasteristica_local)
  puertas:Puertas;

  @ManyToOne(() => Ventanas, (ventanas) => ventanas.carasteristica_local)
  ventanas:Ventanas;

  @ManyToOne(() => Techos, (techos) => techos.carasteristica_local)
  techos:Techos;

  @ManyToOne(() => Plafones, (plafones) => plafones.carasteristica_local)
  plafones:Plafones;

  
  @ManyToOne(() => Huella, (huella) => huella.carasteristica_local)
  huella:Huella;

  
  @ManyToOne(() => Contrahuella, (contrahuella) => contrahuella.carasteristica_local)
  contrahuella:Contrahuella;

  @ManyToOne(() => Escaleras, (escaleras) => escaleras.carasteristica_local)
  escaleras:Escaleras;

  
  @ManyToOne(() => Paredes, (paredes) => paredes.carasteristica_local)
  paredes:Paredes;
  
  @ManyToOne(() => Pasamanos, (pasamanos) => pasamanos.carasteristica_local)
  pasamanos:Pasamanos;
  
  @ManyToOne(() => Pisos, (pisos) => pisos.carasteristica_local)
  pisos:Pisos;
  
  @ManyToOne(() => Local, (local) => local.caracteristica_local)
  local: Local;

  
}
