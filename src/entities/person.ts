import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
