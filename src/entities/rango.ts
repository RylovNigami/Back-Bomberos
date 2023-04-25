import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";


@Entity("Rango")
export class Rango extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  nombre_rango: string;

  @OneToMany(() => Bombero, (bombero) =>  bombero.rango)
  bombero:Bombero[];
}
