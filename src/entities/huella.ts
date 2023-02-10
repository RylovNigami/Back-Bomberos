import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";

@Entity("Huella")
export class Huella extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_huella: string;

  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.huella)
  carasteristica_local:Caracteristica_local[];
}
