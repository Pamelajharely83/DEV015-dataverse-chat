import Home from "./views/Home.js";
import { About } from "./views/About.js";
import { Error } from "./views/Error.js";
import { ChatIndividual } from "./views/ChatIndividual.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";
import { ApiKey } from "./views/ViewApikey.js";

// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
const routes = {
  "/": Home,
  "/about": About,
  "/error": Error,
  "/chat": ChatIndividual,
  "/apikey":ApiKey,
};

setRoutes(routes); /* routes are being saved in ROUTES */

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById("root"));
  onURLChange(window.location);
});

/*TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.*/
