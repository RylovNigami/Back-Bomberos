import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Caracteristica_local")
export class Caracteristica_local extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nro_niveles: string;

  @Column({ type: "varchar" })
  nivel_inmueble: string;

  @Column({ type: "varchar" })
  area: string;
}
