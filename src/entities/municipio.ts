import { BaseEntity, Column, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estado } from "./estado";
import { Parroquia } from "./parroquia";




@Entity("Municipio")
export class Municipio extends BaseEntity {
  static andWhere(arg0: string, arg1: { estado_id: string | import("qs").ParsedQs | string[] | import("qs").ParsedQs[]; }) {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  nombre_municipio: string;

    
  @ManyToOne(() => Estado, (estado) =>  estado.municipio)
  estado:Estado;

  @OneToMany(() => Parroquia, (parroquia) =>  parroquia.municipio)
  parroquia:Parroquia[];

}