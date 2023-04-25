import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";


@Entity("Cargo")
export class Cargo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  nombre_cargo: string;

  @OneToMany(() => Bombero, (bombero) =>  bombero.cargo)
  bombero:Bombero[];

  
}
