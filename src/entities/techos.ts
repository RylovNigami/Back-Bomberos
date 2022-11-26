import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";

@Entity("Techos")
export class Techos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_techos: string;

  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.techos)
  carasteristica_local: Caracteristica_local[];
}
