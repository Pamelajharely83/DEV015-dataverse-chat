let ROUTES = {}; /* stores the paths of index.js */
let rootEl; /* stores the paths of index.js */

export const setRootEl = (el) => {
  rootEl = el;
  return rootEl;
};

export const setRoutes = (routes) => {
  //*? Throw errors if routes isn't an object
  if (typeof routes !== "object") {
    throw new Error("Ups! This isn't an object");
  }
  //*? Throw errors if routes doesn't define an /error route
  if (routes?.["/error"] === undefined) {
    throw new Error("Ups! path '/error' has not been found");
  }
  //*? Assign ROUTES
  ROUTES = routes; /* update ROUTES with the "routes" argument of index.js */
  return ROUTES;
};

const queryStringToObject = (queryString) => {
  //*? Convert query string to URLSearchParams
  const params = new URLSearchParams(queryString);
  //*? Convert URLSearchParams to an object
  const objParams = Object.fromEntries(params);
  //*? Return the object
  return objParams
};

//console.log(queryStringToObject("name=Susy"));

const renderView = (pathname , props = {}) => {
  //*?Clear the root element
  rootEl.innerHTML = "";
  //*?Find the correct view to render
  const viewsFunctions= ROUTES[pathname];
  //*? In case not found render the error view
  if (!viewsFunctions) {
    rootEl.appendChild(ROUTES["/error"]()); /* Parentheses are placed to call the function */
  } else rootEl.appendChild(viewsFunctions(props)); /* Parentheses are placed to call the function */
};

export const onURLChange = (location) => {
  const path = location.pathname; /* calling the window pathname */
  //to-do: search params (objeto)
  const search = queryStringToObject(window.location.search);
  renderView(path, search); /* connecting onURLChange to renderView */
};

export const navigateTo = (pathname, props={}) => {
/*   const { name } = props; 
  const propsOrigin = { name }; */
  const urlSearch = new URLSearchParams(props);
  //console.log(urlSearch)
  const urlOrigin = window.origin+pathname + "?" + urlSearch;
  if(window.history && window.history.pushState){
    window.history.pushState(props, '', urlOrigin);
    //const searchObj = queryStringToObject(props)
    renderView(pathname, props);
  }
}



/*export const navigateTo = (pathname, props={}) => { //navogateTo tiene 3 propósitos: Recibir una ruta, evía un nuevo estado histórico y representa la nueva vista
  // Agrega una nueva vista al historial
  const nuevaVista = new window.history.pushState(props)
  // new es una palabra reservada para crear algo nuevo
  // render the view with the pathname and props
  return renderView(pathname, props)
}*/


















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
