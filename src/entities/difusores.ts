import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { Alarmas } from "./alarmas";
import { Bombero } from "./bombero";


@Entity("Difusores")
export class Difusores extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  difusores_condicion: condicionvenEnum;

  @Column({ type: "boolean",nullable:true })
  cubren_areaDifusor: boolean;

  @ManyToOne(() => Alarmas, (alarmas) =>  alarmas.difusores,{eager:true})
  alarmas:Alarmas;

  
}
