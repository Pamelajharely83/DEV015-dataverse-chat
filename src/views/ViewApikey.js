import { setApiKey } from "../lib/apiKey.js";

export const ApiKey = () => {
  const viewApi = document.createElement("div");
  viewApi.innerHTML = ` 
  <header>
    <div class= "containerLogo">
      <h1>
        <img id="imgLogoDisney" src="https://raw.githubusercontent.com/Susana-equihua/DEV015-dataverse/main/Disney%20pets/logo%20disney.png"
                alt="DISNEY"
              />
              MASCOTAS
      </h1>
    </div>
    <button id= "backHome" class= "btnHome">
    Home
    </button>
  <header>
  <form class = "apikey-form">
    <div class= "tittleContainer">
      <h1>Ingresa tu API Key para continuar<h1>
    </div>
    <input id="inputApiKey" type= "text" placeholder = "Escribe aquí tu API Key...">
    </input>
    <div class= "infoApi">
      <p>¿No sabes qué es una API Key?</p>
      <a href= "#" id= "infoLink">Aquí te mostramos cómo obtener una"
    </div>
    <button id= "apiClear">Limpiar
    </button>
    <button type="submit" id= "continue">Continuar
    </button>
  </form>
  `

  const saveApiButton = viewApi.querySelector("#continue");
  saveApiButton.addEventListener("click", () => {
    const userApi = viewApi.querySelector("#inputApiKey").value;
    setApiKey("#inputApiKey" , userApi);
  });
  
  return viewApi;
};