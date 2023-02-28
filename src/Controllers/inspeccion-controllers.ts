import { Response, Request } from "express";
import { Bombero } from "../entities/bombero";
import { Inspeccion } from "../entities/inspeccion";
import { Local } from "../entities/local";
import { Person } from "../entities/person";  


export const createInspeccion = async (req: Request, res: Response) => {
  try {
    const { existe_guia,nro_inspeccion,hora,fecha, local, bombero } = req.body;

    const inspeccion = new Inspeccion();
    inspeccion.existe_guia=existe_guia,
    inspeccion.nro_inspeccion=nro_inspeccion,
    inspeccion.hora=hora;
    inspeccion.fecha=fecha;
    inspeccion.local=local;
    inspeccion.bombero=bombero;



    const validar_local = await Local.findOne({where:{id:local}});  

    if(!validar_local){
      return res.status(500).json({ message: "no se encontro el local"});
    }

    const validar_bombero = await Bombero.findOne({where:{id:bombero}});

    if(!validar_bombero){
      return res.status(500).json({ message: "no se encontro este bombero"});
    }


    await inspeccion.save();

    console.log(inspeccion);

    return res.json(inspeccion);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const getInspeccion = async (req: Request, res: Response) => {
  try {
    const querybuilder = await Inspeccion.createQueryBuilder('i')
    .leftJoinAndSelect('i.local', 'local')
    .leftJoinAndSelect('i.bombero', 'bombero')
    .leftJoinAndSelect('bombero.person', 'person')
    .leftJoinAndSelect('bombero.cargo', 'cargo')
    .leftJoinAndSelect('bombero.rango', 'rango')
    .leftJoinAndSelect('bombero.departamento', 'departamento')
    .leftJoinAndSelect('local.instalacion_gas', 'localIL')
    .leftJoinAndSelect('local.alm_seguro', 'localAS')
    .leftJoinAndSelect('local.electricidad', 'localE')
    .leftJoinAndSelect('local.alm_riesgoso', 'localAR')
    .leftJoinAndSelect('local.interviewer', 'localIn')
    .leftJoinAndSelect('local.solitude', 'localSo')
    .leftJoinAndSelect('local.localOwner', 'locallo')
    .leftJoinAndSelect('local.extintor_local', 'localex')
    .leftJoinAndSelect('localex.extintor_p', 'extintorp')
    .leftJoinAndSelect('localex.company', 'extintorcp')
    .leftJoinAndSelect('localex.agente_extinguidor', 'extintorag')
    .leftJoinAndSelect('local.medios_escape', 'localml')
    .leftJoinAndSelect('local.alarmas', 'localal')
    .leftJoinAndSelect('localal.brand', 'brand')
    .leftJoinAndSelect('localal.difusores', 'difusores')
    .leftJoinAndSelect('local.caracteristica_local', 'localcl')
    .leftJoinAndSelect('localcl.puertas', 'clp')
    .leftJoinAndSelect('localcl.contrahuella', 'clch')
    .leftJoinAndSelect('localcl.escaleras', 'cles')
    .leftJoinAndSelect('localcl.huella', 'clhl')
    .leftJoinAndSelect('localcl.paredes', 'clpr')
    .leftJoinAndSelect('localcl.pasamanos', 'clpm')
    .leftJoinAndSelect('localcl.pisos', 'clps')
    .leftJoinAndSelect('localcl.plafones', 'clpl')
    .leftJoinAndSelect('localcl.techos', 'cltc')
    .leftJoinAndSelect('localcl.ventanas', 'clvt')
    .getMany();

    return res.json(querybuilder)
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const updateInspeccion = async (req: Request, res: Response) => {
  const { id } = req.params;

  const inspeccion = await Inspeccion.findOneBy({ id: parseInt(req.params.id) });
  console.log(inspeccion);

  if (!inspeccion)
    return res.status(404).json({ message: " does not exists" });

  await Inspeccion.update({ id: parseInt(id) }, req.body);

  return res.sendStatus(204);
};

export const deleteInspeccion = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const result = await Inspeccion.delete({ id: parseInt(id) });

    if (result.affected === 0) {
      return res.status(404).json({ message: "person not found" });
    }

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
