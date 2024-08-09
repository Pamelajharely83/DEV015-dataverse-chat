import Home from "./views/Home.js";
import { About } from "./views/About.js" 
import { Error } from "./views/Error.js"
import { setRootEl,  setRoutes , onURLChange } from './router.js';

// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
const routes = {
    "/": Home(),
    "/about": About(),
    "/error": Error(), /* aquí debería llamarse a una función que arroje un error al colocar una url distinta a las que estan en el objeto*/
}

setRoutes(routes); /* se esta guardando las rutas en ROUTES */

window.addEventListener("DOMContentLoaded", () => {
    setRootEl(document.getElementById("root"));
    onURLChange(/* location */)
});

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/