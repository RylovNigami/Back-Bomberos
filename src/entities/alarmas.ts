import { BaseEntity, Column, Entity, ManyToOne,PrimaryGeneratedColumn } from "typeorm";
import { Local } from "./local";

@Entity("Alarmas")
export class Alarmas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar" })
  sistema_alarma: string;

  @Column({ type: "varchar" })
  norma_alarma: boolean;

  @Column({ type: "varchar" })
  sistema_deteccion: boolean;

  @Column({ type: "varchar" })
  condiciones: boolean;

  @Column({ type: "varchar" })
  tipo: boolean;

  @Column({ type: "varchar" })
  numero_zona: number;

  @Column({ type: "varchar" })
  area_proteger: boolean;

  @Column({ type: "varchar" })
  calor: number;

  @Column({ type: "varchar" })
  humo_f: number;

  @Column({ type: "varchar" })
  humo_i: number;

  @Column({ type: "varchar" })
  combinado: number;

  @Column({ type: "varchar" })
  detectores_a: boolean;

  @Column({ type: "varchar" })
  estacion: boolean;

  @Column({ type: "varchar" })
  estacion_clase: string;

  @Column({ type: "varchar" })
  estacion_c: boolean;

  @Column({ type: "varchar" })
  difusores_s: boolean;

  @Column({ type: "varchar" })
  difusores_c: boolean;

  @Column({ type: "varchar" })
  cubren_a: boolean;


  @ManyToOne(() => Local, (local) => local.alarmas,{eager:true})
  local:Local;
}
