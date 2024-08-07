let ROUTES = {}; /* stores the paths of index.js */
let rootEl; 

export const setRootEl = (el) => {
  rootEl = el;
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
  console.log(ROUTES); /* imprime las rutas en la consola */
  return ROUTES
};

const renderView = (pathname, props={}) => {
  //*?Clear the root element
  rootEl.innerHTML = "";
  //*?Find the correct view to render
  const viewsRoutes = ROUTES[pathname]
  if(!viewsRoutes){
    
  }
  rootEl.innerHTML = viewsRoutes
};

//console.log(location.pathname)

// export const onURLChange = (location) => {
// }


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