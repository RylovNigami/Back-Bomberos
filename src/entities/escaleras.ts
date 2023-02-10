import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";

@Entity("Escaleras")
export class Escaleras extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_escaleras: string;

  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.escaleras)
  carasteristica_local:Caracteristica_local[];
}
