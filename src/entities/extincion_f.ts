import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Extincion_f")
export class Extincion_f extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  operativo_f: boolean;

  @Column({ type: "varchar" })
  cap_tanque: string;

  @Column({ type: "varchar" })
  ubic_tanque: string;

  @Column({ type: "varchar" })
  cajetines_m: boolean;

  @Column({ type: "varchar" })
  cantidad_c: string;

  @Column({ type: "varchar" })
  mangueras: boolean;

  @Column({ type: "varchar" })
  condicion_m: boolean;

  @Column({ type: "varchar" })
  longitud: string;

  @Column({ type: "varchar" })
  diametro: string;

  @Column({ type: "varchar" })
  area_protegerf: boolean;


  @ManyToOne(() => Local, (local) => local.extincion_f,{eager:true})
  local:Local;
}
