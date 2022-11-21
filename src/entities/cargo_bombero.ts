import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Cargo_bombero")
export class Cargo_bombero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  status: boolean;

  @Column({ type: "varchar" })
  temporabilidad: string;
}
