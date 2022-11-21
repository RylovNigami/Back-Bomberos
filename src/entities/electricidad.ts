import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Electricidad")
export class Electricidad extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  tension: string;

  @Column({ type: "varchar" })
  material_tablero: string;

  @Column({ type: "varchar" })
  señalizacion: boolean;

  @Column({ type: "varchar" })
  ventilacion: boolean;

  @Column({ type: "varchar" })
  tipo_ven: boolean;

  @Column({ type: "varchar" })
  tipo_interruptor: string;
}
