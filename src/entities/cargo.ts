import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Cargo_bombero } from "./cargo_bombero";

@Entity("Cargo")
export class Cargo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_cargo: string;

  @OneToMany(() => Cargo_bombero, (cargo_bombero) =>  cargo_bombero.cargo)
  cargo_bombero:Cargo_bombero[];
}
