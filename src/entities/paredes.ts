import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
@Entity("Paredes")
export class Paredes extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_paredes: string;

  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.paredes)
  carasteristica_local:Caracteristica_local[];
}
