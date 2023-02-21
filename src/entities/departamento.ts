import { BaseEntity, Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";


@Entity("Departamento")
export class Departamento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_dep: string;

  @OneToMany(() => Bombero, (bombero) => bombero.departamento)
  bombero:Bombero[];
}
