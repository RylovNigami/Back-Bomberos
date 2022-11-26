import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";

@Entity("Plafones")
export class Plafones extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_plafones: string;

  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.plafones)
  carasteristica_local:Caracteristica_local[];
}
