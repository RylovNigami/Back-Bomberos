import { BaseEntity, Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cargo_bombero } from "./cargo_bombero";

@Entity("Departamento")
export class Departamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_dep: string;

  @OneToMany(() => Cargo_bombero, (cargo_bombero) => cargo_bombero.departamento)
  cargo_bombero:Cargo_bombero[];
}
