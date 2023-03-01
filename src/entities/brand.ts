import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Alarmas } from "./alarmas";
import { Bombero } from "./bombero";


@Entity("Brand")
export class Brand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar",nullable:true })
  brandname: string;

  @OneToMany(() => Alarmas, (alarmas) =>  alarmas.brand)
  alarmas:Alarmas[];

  
}
