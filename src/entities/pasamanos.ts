import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";
@Entity("Pasamanos")
export class Pasamanos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_pasamanos: string;

  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.pasamanos)
  carasteristica_local:Caracteristica_local[];
}
