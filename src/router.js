let ROUTES = {}; /* stores the paths of index.js */
let rootEl; /* stores the paths of index.js */

export const setRootEl = (el) => {
  rootEl = el;
  console.log("Imprimiendo rootEl dentro de la función: ", rootEl);
  return rootEl;
};

export const setRoutes = (routes) => {
  //*? Throw errors if routes isn't an object
  if (typeof routes !== "object") {
    throw new Error("Ups! This isn't an object");
  }
  //*? Throw errors if routes doesn't define an /error route
  if (routes?.["/error"] == undefined) {
    throw new Error("Ups! path '/error' has not been found");
  }
  //*? Assign ROUTES
  ROUTES = routes; /* update ROUTES with the "routes" argument of index.js */
  console.log(
    "Imprimendo rutas de ROUTES dentro de la función: ",
    ROUTES
  );
  return ROUTES;
};

const queryStringToObject = (queryString) => {
  //*? Convert query string to URLSearchParams
  //*? Convert URLSearchParams to an object
  //*? Return the object
};
console.log("Esta imprimiendo la search actual: ", window.location.search);

const renderView = (pathname, props = {}) => {
  //*?Clear the root element
  rootEl.innerHTML = "";
  //*?Find the correct view to render
  const viewsFunctions= ROUTES[pathname];
  //*? In case not found render the error view
  if (!viewsFunctions) {
    rootEl.appendChild(ROUTES["/error"]()); /* Parentheses are placed to call the function */
  } else rootEl.appendChild(viewsFunctions()); /* Parentheses are placed to call the function */
};

export const onURLChange = (location) => {
  const path = location.pathname; /* calling the window pathname */
  //to-do: search params (objeto)
  renderView(path); /* connecting onURLChange to renderView */
};

//TODO: Testing the conditional for error throwing
/* const hola = 'Good morning'
try {
    setRoutes(hola)
} catch(error){
    console.log(error.name, error.message)
} */
//TODO: Exercise to learn how for...in
/* const trabalengua = {
  nombre: 'Pablito',
  accion: 'clavó',
  cosa: 'un clavito'
}
for (const props in trabalengua){
  console.log(trabalengua[props])
} */
