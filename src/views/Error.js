export const Error = ({ name }) => {
  const viewError = document.createElement("div");
  viewError.textContent = `Hello ${name}, this is a Error page`;
  return viewError;
};
