import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Inspeccion")
export class Inspeccion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nro_inspeccion: number;

  @Column({ type: "varchar" })
  hora : string;

  @Column({ type: "varchar" })
  fecha: string;
}
