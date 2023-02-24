import { BaseEntity, Column, Entity, ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { Extintor_local } from "./extintor_local";
import { Local } from "./local";


@Entity("Extintor_p")
export class Extintor_p extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  posee: boolean;

  
  @Column({ type: "boolean" })
  requiere: boolean;

  @Column({ type: "numeric" })
  nro_requiere: number;  

  @Column({ type: "varchar" })
  tipo_requiere: string;


  @OneToMany(() => Extintor_local, (extintor_local) => extintor_local.extintor_p)
  extintor_local:Extintor_local[];
}