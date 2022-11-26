import { BaseEntity, Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inspeccion } from "./inspeccion";

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

  
  @OneToMany(() => Inspeccion, (inspeccion) => inspeccion.local)
  inspeccion:Inspeccion[];
}
