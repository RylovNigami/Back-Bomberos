import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = (`${__dirname}`);

// configuracion para las rutas dinamicas
export const router = Router();

const clean_file_name = (file_name: any) => {
    const file = file_name.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((file_name) => {
    const clean_name = clean_file_name(file_name);
    if (clean_name !== 'routes') {
        import(`./${clean_name}.routes`).then((modele_router) => {
            router.use(`/${clean_name}`, modele_router.router);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }
});
