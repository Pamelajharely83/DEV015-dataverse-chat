//importar dataset
//import data from "../data/dataset.js"
import { communicateWithOpenAI, renderMessage } from "../lib/openAIApi.js"
import { navigateTo } from "../router.js";

export const IndividualChat = (props) => {
  const { name, image } = props;
  //console.log(image)
  const characterName = name[0].toUpperCase() + name.substring(1);
  console.log(characterName);

  const viewChat = document.createElement("div");
  viewChat.setAttribute("id", "individualChatContainer");
  viewChat.innerHTML = `
    <header id="headerChat">
      <figure id="characterPhotoName" class="profilePhoto-${name}">
        <img src="${image}" alt="photoCharacter" id="photoCharacter">
      </figure>
      <p id="characterName">${characterName}</p>
      <button id="chatOptions">
        <i class="fa-solid fa-ellipsis" id="optionIcons"></i>
      </button>

      <div id="optionsIndividual"  class="hidden">
        <div id="optionsIndividualChat">
          <button id="homeBackBtn" class="btnsBox">
            <img src= "../icons/houseicon.png" alt= "Inicio" class="btnsBoxOption" id="btnBoxHome">
            <p>Ir al inicio</p>
          </button>
          <button id="conocerMasBtn" class="btnsBox"> 
            <img src= "../icons/eyes.png" alt= "Conocer Más" class="btnsBoxOption" id="btnBoxMore">
            <p>Conocer más</p>
          </button>
          <button id="groupChatBtn" class="btnsBox"> 
            <img src= "../icons/message.png " alt= "Chat Grupal" class="btnsBoxOption" id="btnBoxGroup">
            <p>Ir al chat grupal</p>
          </button>
        </div>
      </div>
    </header>

    <main id="mainChat">

    </main>

    <footer id="footerIndividualChat">
      <div id="divTypingBar">
        <input id="typingBar" type="text" placeholder="Escribele algo a ${characterName}..."></input>
        <button id="btnChatSent">
          <img src="../icons/send-button.svg" alt="send-button" id="sendButtonIcon">
        </button>
      </div>
    </footer>
    `;

  //? EFECTO DE LAS OPCIONES DEL CHAT INDIVIDUAL: 
    const optionButtons = viewChat.querySelector("#chatOptions");
    const divOptions = viewChat.querySelector("#optionsIndividual");

    optionButtons.addEventListener("click", () => {
      divOptions.classList.toggle("hidden");
    });
  
  //? CONECTANDO CON LA IA PARA GENERAR LOS MENSAJES: 
  viewChat.querySelector('#btnChatSent').addEventListener('click', async () => {
    const userMessage = viewChat.querySelector('#typingBar').value; 
    renderMessage(userMessage, 'user', viewChat);
    viewChat.querySelector('#typingBar').value = ''; 
    
    const characterResponse = communicateWithOpenAI(name, userMessage, viewChat);
    return characterResponse 
  });

  //? PARA LAS OPCIONES DEL CHAT
  viewChat.querySelector('#homeBackBtn').addEventListener('click', () => {
    navigateTo('/');
  });
  
  return viewChat;
};
