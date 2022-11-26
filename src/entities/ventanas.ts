import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";

@Entity("Ventanas")
export class Ventanas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_ventanas: string;

  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.ventanas)
  carasteristica_local:Caracteristica_local[];
}
