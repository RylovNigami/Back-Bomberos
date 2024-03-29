import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";

@Entity("Pisos")
export class Pisos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_pisos: string;

  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.pisos)
  carasteristica_local:Caracteristica_local[];
}
