let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
  return rootEl;
};

export const setRoutes = (routes) => {
  if (typeof routes !== "object") {
    throw new Error("Ups! This isn't an object");
  }
  if (routes?.["/error"] === undefined) {
    throw new Error("Ups! path '/error' has not been found");
  }
  ROUTES = routes;
  return ROUTES;
};

const queryStringToObject = (queryString) => {
  const params = new URLSearchParams(queryString);
  const objParams = Object.fromEntries(params);
  return objParams;
};

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = "";
  const viewsFunctions = ROUTES[pathname];
  if (!viewsFunctions) {
    rootEl.appendChild(ROUTES["/error"]());
  } else rootEl.appendChild(viewsFunctions(props));
};

export const onURLChange = (location) => {
  const path = location.pathname;
  const search = queryStringToObject(window.location.search);
  renderView(path, search);
};

export const navigateTo = (pathname, props = {}) => {
  const urlSearch = new URLSearchParams(props);
  const urlOrigin = window.origin + pathname + "?" + urlSearch;
  if (window.history && window.history.pushState) {
    window.history.pushState(props, "", urlOrigin);
    renderView(pathname, props);
  }
};
