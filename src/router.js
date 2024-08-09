let ROUTES = {}; /* stores the paths of index.js */
let rootEl; 

export const setRootEl = (el) => {
  rootEl = el;
  console.log('Imprimiendo rootEl ', rootEl)
  return rootEl
};

export const setRoutes = (routes) => {
  //*? Throw errors if routes isn't an object
  if (typeof routes !== 'object') {
    throw new Error("Ups! This isn't an object");
  };
  //*? Throw errors if routes doesn't define an /error route
  if(routes?.["/error"] == undefined){
    throw new Error("Ups! path '/error' has not been found")
  }
  //*? Assign ROUTES
  ROUTES = routes; /* update ROUTES with the "routes" argument of index.js */
  console.log('Imprimendo rutas de ROUTES dentro de la función', ROUTES); /* imprime las rutas en la consola */
  return ROUTES
};

const queryStringToObject = (queryString) => {
  //*? Convert query string to URLSearchParams
  //*? Convert URLSearchParams to an object
  //*? Return the object
}
console.log(window.location.search);
console.log(new URLSearchParams("foo=1&bar=2"))

const renderView = (pathname, props={}) => {
  //*?Clear the root element
  rootEl.innerHTML = "";
  //*?Find the correct view to render
  const viewsRoutes = ROUTES[pathname]
  /* console.log(viewsRoutes) */
  //*? In case not found render the error view
  if(!viewsRoutes){
    rootEl.innerHTML = ROUTES["/error"]
  } else rootEl.innerHTML = viewsRoutes;
};
console.log('Imprime el path de la url actual ', location.pathname)

export const onURLChange = (location) => {

}


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