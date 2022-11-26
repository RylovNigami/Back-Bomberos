import { BaseEntity, Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pisos } from "./pisos";
import { Plafones } from "./plafones";
import { Puertas } from "./puertas";
import { Techos } from "./techos";
import { Ventanas } from "./ventanas";

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

  @OneToMany(() => Puertas, (puertas) => puertas.carasteristica_local)
  puertas:Puertas[];

  @OneToMany(() => Ventanas, (ventanas) => ventanas.carasteristica_local)
  ventanas:Ventanas[];

  @OneToMany(() => Techos, (techos) => techos.carasteristica_local)
  techos:Techos[];

  @OneToMany(() => Plafones, (plafones) => plafones.carasteristica_local)
  plafones:Plafones[];

  
}
