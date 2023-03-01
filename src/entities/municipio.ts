import { BaseEntity, Column, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estado } from "./estado";
import { Parroquia } from "./parroquia";

@Entity("Municipio")
export class Municipio extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  nombre_municipio: string;

    
  @ManyToOne(() => Estado, (estado) =>  estado.municipio)
  estado:Estado;

  @OneToMany(() => Parroquia, (parroquia) =>  parroquia.municipio)
  parroquia:Parroquia[];

}