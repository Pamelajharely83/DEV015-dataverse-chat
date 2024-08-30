import Home from "./views/Home.js";
import { About } from "./views/About.js";
import { Error } from "./views/Error.js";
import { IndividualChat } from "./views/ChatIndividual.js";
import { setRootEl, setRoutes, onURLChange } from "./router.js";
import { ApiKey } from "./views/ViewApikey.js";

const routes = {
  "/": Home,
  "/about": About,
  "/error": Error,
  "/chat": IndividualChat,
  "/apikey": ApiKey,
};

setRoutes(routes);

window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById("root"));
  onURLChange(window.location);
});

window.addEventListener("popstate", () => {
  onURLChange(window.location);
});
