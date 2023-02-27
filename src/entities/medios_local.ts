import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { condicionvenEnum } from "../enum/condicionVen";
import { tipoEscaleraEnum } from "../enum/tipoescalera";
import { Extintor_p } from "./extintor_p";
  import { Local } from "./local";
import { Medios_escape } from "./medios_escape";
  
  @Entity("Medios_local")
  export class Medios_local extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;


  @Column({ type: "boolean" })
  escalera_vias: boolean;
   
  @Column({ type: "boolean" })
  condicion_escaleras: condicionvenEnum;

  @Column({ type: "boolean" })
  tipo_escaleras: tipoEscaleraEnum;

  @Column({ type: "numeric" })
  ancho_escalera: number;

  @Column({ type: "numeric" })
  altura_pasamano: number;

  @Column({ type: "numeric" })
  ancho_huella: number;

  @Column({ type: "numeric" })
  altura_contrahuella: number;

  @Column({ type: "varchar" })
  tipo_puertaviasEscape: string;

  @Column({ type: "boolean" })
  sentido_salida: boolean;

  @Column({ type: "varchar" })
  observacion_viasEscape: string;

    @ManyToOne(() => Local, (local) => local.medios_local,{eager:true})
    local:Local;

    @ManyToOne(() => Medios_escape, (medios_escape) => medios_escape.medios_local,{eager:true})
    medios_escape:Medios_escape;
  }