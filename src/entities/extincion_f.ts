import { BaseEntity, Column, Entity, ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { Extincion_local } from "./extincion_local";
import { Local } from "./local";

@Entity("Extincion_f")
export class Extincion_f extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean" })
  extincion_fija: boolean;

  @Column({ type: "boolean" })
  operativo_extincionFija: boolean;

  @Column({ type: "numeric" })
  capacidad_tanqueExtincion: number;

  @Column({ type: "varchar" })
  ubic_tanqueExtincion: string;

  @Column({ type: "boolean" })
  cajetines_mangueras: boolean;

  @Column({ type: "numeric" })
  cantidad_cajetinesManguera: number;

  
  @OneToMany(() => Extincion_local, (extincion_local) => extincion_local.extincion_f)
  extincion_local:Extincion_local[];
}
