import { BaseEntity, Column, Entity,ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cargo_bombero } from "./cargo_bombero";
import { Local } from "./local";

@Entity("Inspeccion")
export class Inspeccion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nro_inspeccion: number;

  @Column({ type: "varchar" })
  hora : string;

  @Column({ type: "varchar" })
  fecha: Date;

  @ManyToOne(() => Cargo_bombero, (cargo_bombero) => cargo_bombero.inspeccion)
  cargo_bombero:Cargo_bombero;

  @ManyToOne(() => Local, (local) => local.inspeccion)
  local:Local;

}
