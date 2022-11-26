import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";

@Entity("Puertas")
export class Puertas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_puertas: string;

  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.puertas)
  carasteristica_local:Caracteristica_local[];
}
