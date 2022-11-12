import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Bombero")
export class Bombero extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  rango: string;

  @Column({ type: "varchar" })
  ordenGeneral: number;

  @Column({ type: "varchar" })
  status: string;
}
