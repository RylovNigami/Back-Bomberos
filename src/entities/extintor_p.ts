import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Extintor_p")
export class Extintor_p extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  posee: boolean;

  @Column({ type: "varchar" })
  operativo_extintor: boolean;

  @Column({ type: "varchar" })
  tipo_extintor: string;

  @Column({ type: "varchar" })
  capacidad_extintor: boolean;

  @Column({ type: "varchar" })
  empresa: string;

  @Column({ type: "varchar" })
  reubicacion: boolean;

  @Column({ type: "varchar" })
  requiere: string;

  @Column({ type: "varchar" })
  tipo_requiere: string;


  @ManyToOne(() => Local, (local) => local.extintor_p,{eager:true})
  local:Local;
}
