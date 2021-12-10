//* Importar la ruta base y los métodos 

import { BASE_URL } from "../index";
import * as METHODS from "../methods";

//* Necesito 2 servicios 1, que es el login y el shinguup

const URL = `${BASE_URL}/auth`;

//* body y eso
export const login = async (body) => {
    try{
        // peticion
        const response = await fetch(`${URL}/login`, METHODS.POST(body));
        const data = await response.json();
        return data;
    } catch (error) {
        return error.message;
    }
};