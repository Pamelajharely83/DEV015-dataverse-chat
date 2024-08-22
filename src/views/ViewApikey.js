import { setApiKey /*getApiKey*/ } from "../lib/apiKey.js";

export const ApiKey = () => {
  const viewApi = document.createElement("div");
  viewApi.setAttribute("class", "apikeyContainer");
  viewApi.innerHTML = ` 
  <header>
    <div class="apikeyHeader">
      <div class= "containerLogo">
        <h1>MASCOTAS</h1>
        <img id="logoDisney" src="https://raw.githubusercontent.com/Susana-equihua/DEV015-dataverse/main/Disney%20pets/logo%20disney.png" alt="DISNEY"/>               
      </div>
      <button id= "backHome" class= "btnHome">
      <img src= "../icons/home.svg" alt= "Inicio">
      </button>
    </div>
  <header>
  <form class = "apikeyForm">
    <div class= "tittleContainer">
      <h1>Ingresa tu API Key para activar el chat</h1>
    </div>
    <input id="inputApikey" type= "text" placeholder = "Escribe aquí tu API Key...">
    </input>
    <div class= "infoApi">
      <p>¿No sabes qué es una API Key?</p>
      <a href= "#" id= "infoLink">Aquí te mostramos cómo obtener una>
    </div>
    <button id= "apiClear">Limpiar
    </button>
    <button type="submit" id="continue">Continuar
    </button>
  </form>
  `;

  const saveApiButton = viewApi.querySelector("#continue");
  saveApiButton.addEventListener("click", () => {
    const userApi = viewApi.querySelector("#inputApikey").value;
    setApiKey("inputApiKey", userApi);
  });

  return viewApi;
};
