import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Instalacion_gas")
export class Instalacion_gas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  suministro: boolean;

  @Column({ type: "varchar" })
  tipo: string;

  @Column({ type: "varchar" })
  cap_bombona: string;

  @Column({ type: "varchar" })
  ubic_bombona: string;

  @Column({ type: "varchar" })
  condicion_v: string;

  @Column({ type: "varchar" })
  ventilada: boolean;  

  @Column({ type: "varchar" })
  cap_tanque: string;

  @Column({ type: "varchar" })
  ubic_tanque: string;

  @Column({ type: "varchar" })
  aterramiento: boolean;  

  @Column({ type: "varchar" })
  ubic_valvula: string;

  @ManyToOne(() => Local, (local) => local.instalacion_gas)
  local:Local;

}
