import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";
import { User } from "./user";
import { Inspeccion } from "./inspeccion";

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
  telefono: string;

  @Column({ type: "varchar" })
  correo: string;

  @OneToOne(() => User, (user) => user.person)
  user: User;

  @OneToMany(() => Bombero, (bombero) =>  bombero.person)
  bombero:Bombero[];

  @OneToMany(() => Inspeccion, (inspeccion) => inspeccion.person)
  inspeccion:Inspeccion[];
}
