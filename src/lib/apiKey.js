export const getApiKey = (key) => {
  return localStorage.getItem(key);
};

export const setApiKey = (key, value) => {
  return localStorage.setItem(key, value);
};
