import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Caracteristica_local } from "./caracteristica_local";

@Entity("Contrahuella")
export class Contrahuella extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_contrahuella: string;

  
  @ManyToOne(() => Caracteristica_local, (caracteristica_local) => caracteristica_local.huella)
  carasteristica_local:Caracteristica_local[];
}
