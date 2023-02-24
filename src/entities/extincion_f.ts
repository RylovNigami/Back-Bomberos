import { BaseEntity, Column, Entity, ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { Extincion_local } from "./extincion_local";
import { Local } from "./local";

@Entity("Extincion_f")
export class Extincion_f extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean" })
  operativo_f: boolean;

  @Column({ type: "numeric" })
  cap_tanque: number;

  @Column({ type: "varchar" })
  ubic_tanque: string;

  @Column({ type: "boolean" })
  cajetines_m: boolean;

  @Column({ type: "numeric" })
  cantidad_c: number;

  
  @OneToMany(() => Extincion_local, (extincion_local) => extincion_local.extincion_f)
  extincion_local:Extincion_local[];
}
