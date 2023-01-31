import { BaseEntity, Column,ManyToOne,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";
import { Cargo } from "./cargo";
import { Departamento } from "./departamento";
import { Inspeccion } from "./inspeccion";

@Entity("Cargo_bombero")
export class Cargo_bombero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  status: boolean;

  @Column({ type: "varchar" })
  temporabilidad: string;

  @ManyToOne(() => Bombero, (bombero) =>  bombero.cargo_bombero)
  bombero:Bombero;

  @ManyToOne(() => Cargo, (cargo) =>  cargo.cargo_bombero)
  cargo:Cargo;

  @ManyToOne(() => Departamento, (departamento) => departamento.cargo_bombero)
  departamento:Departamento;

  @OneToMany(() => Inspeccion, (inspeccion) => inspeccion.cargo_bombero)
  inspeccion:Inspeccion[];
}
