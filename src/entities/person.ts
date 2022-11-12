import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";

@Entity("people")
export class Person extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  firstName: string;

  @Column({ type: "varchar" })
  lastName: string;

  @Column({ type: "varchar", unique: true })
  cedula: number;

  @Column({ type: "varchar" })
  telefono: number;

  @Column({ type: "varchar" })
  correo: string;

  @OneToMany(() => Bombero, (bombero) =>  bombero.person)
  bombero:Bombero[];
}
