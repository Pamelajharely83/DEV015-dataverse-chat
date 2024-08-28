export const getApiKey = (key) => {
  return localStorage.getItem(key);
  // Implementa el código para obtener la API KEY desde Local Storage
};

// Implementa el código para guardar la API KEY en Local Storage
export const setApiKey = (key, value) => {
  return localStorage.setItem(key, value);
};

