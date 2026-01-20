import { readFileSync } from "fs";
import { DataSource } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { Estado } from "../entities/estado";
import { Municipio } from "../entities/municipio"; // Asegúrate de importar tus entidades
import { Parroquia } from "../entities/parroquia";

// Definición de interfaces para el tipado
interface IEstado { nombre_estado: string }
interface IMunicipio {  nombre_municipio: string, estado: number }
interface IParroquia { nombre_parroquia: string, municipio: number }

export default class CreateUbicacionesGeograficas implements Seeder {
  public async run(factory: Factory, connection: DataSource): Promise<any> {
    
    // 1. CARGAR DATOS DESDE LOS JSON
    const { estado } = JSON.parse(readFileSync("./src/seeds/json/estado.json", "utf8"));
    const { municipio } = JSON.parse(readFileSync("./src/seeds/json/municipio.json", "utf8"));
    const { parroquia } = JSON.parse(readFileSync("./src/seeds/json/parroquia.json", "utf8"));

    // 2. SEEDER DE ESTADOS
    const estadoValues: IEstado[] = estado.map((nombre_estado: string) => ({
      nombre_estado: nombre_estado
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Estado)
      .values(estadoValues)
      .orIgnore() // Evita errores si el registro ya existe
      .execute();

    // 3. SEEDER DE MUNICIPIOS
    const municipioValues = municipio.map((m: IMunicipio) => ({
      nombre_municipio: m.nombre_municipio,
      estado: { id: m.estado } // Relación con la entidad Estado
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Municipio)
      .values(municipioValues)
      .orIgnore()
      .execute();

    // 4. SEEDER DE PARROQUIAS
    const parroquiaValues = parroquia.map((p: IParroquia) => ({
      nombre_parroquia: p.nombre_parroquia,
      municipio: { id: p.municipio } // Relación con la entidad Municipio
    }));

    await connection
      .createQueryBuilder()
      .insert()
      .into(Parroquia)
      .values(parroquiaValues)
      .orIgnore()
      .execute();

    console.log("Seeding de división política territorial completado con éxito.");
  }
}