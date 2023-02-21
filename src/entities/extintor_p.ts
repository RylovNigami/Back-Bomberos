import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
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


  @ManyToOne(() => Local, (local) => local.extintor_p,{eager:true})
  local:Local;
}