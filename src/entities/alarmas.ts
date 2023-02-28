import { BaseEntity, Column, Entity, ManyToOne,OneToMany,PrimaryGeneratedColumn } from "typeorm";
import { condicionalarmaEnum } from "../enum/condicionalarma";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoalarmaEnum } from "../enum/tipoalarma";
import { tipodeteccionEnum } from "../enum/tipodeteccion";
import { Alarmas_local } from "./alarmas_local";
import { Brand } from "./brand";
import { Difusores } from "./difusores";
import { Estacion_manual } from "./estacion_manual";
import { Local } from "./local";

@Entity("Alarmas")
export class Alarmas extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "boolean" })
  sistema_alarma: boolean;

  @Column({ type: "varchar" })
  sistema_deteccion: tipodeteccionEnum;

  @Column({ type: "varchar" })
  condiciones_alarmas: condicionalarmaEnum;

  @Column({ type: "varchar" })
  tipo_deteccion: tipoalarmaEnum;

  @Column({ type: "numeric" })
  nro_zonaAlarma: number;

  @Column({ type: "boolean" })
  area_protegerDeteccion: boolean;

  @Column({ type: "numeric" })
  calor: number;

  @Column({ type: "numeric" })
  humo_f: number;

  @Column({ type: "numeric" })
  humo_i: number;

  @Column({ type: "numeric" })
  combinado: number;

  @Column({ type: "boolean" })
  detectores_area: boolean;

  @Column({ type: "boolean" })
  difusores_sonido: boolean;

  @Column({ type: "boolean" })
  estacion_manual: boolean;


  @ManyToOne(() => Local, (local) => local.alarmas,{eager:true})
  local:Local;

  @ManyToOne(() => Brand, (brand) =>  brand.alarmas,{eager:true})
  brand:Brand;

  @ManyToOne(() => Estacion_manual, (estacion_manual) =>  estacion_manual.alarmas,{eager:true})
  estacion:Estacion_manual;

  @ManyToOne(() => Difusores, (difusores) =>  difusores.alarmas,{eager:true})
  difusores:Difusores;
}
