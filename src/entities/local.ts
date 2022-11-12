import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Local")
export class Local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  rif: number;

  @Column({ type: "varchar" })
  ubicacion: string;

  @Column({ type: "varchar" })
  firma_mercantil: string;
}
