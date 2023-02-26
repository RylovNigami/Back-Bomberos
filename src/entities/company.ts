import { BaseEntity, Column,OneToMany, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Bombero } from "./bombero";
import { Extintor_local } from "./extintor_local";


@Entity("Company")
export class Company extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  companyName: string;

  @OneToMany(() => Extintor_local, (extintor_local) =>  extintor_local.company)
  extintor_local:Extintor_local[];

  
}
