import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";


@Entity("Rango")
export class Rango extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_rango: string;

  @OneToMany(() => Bombero, (bombero) =>  bombero.rango)
  bombero:Bombero[];
}
