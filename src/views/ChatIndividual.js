//importar dataset
import data from "../data/dataset.js"
export const IndividualChat = (props) => {
  console.log(props); 
  const viewChat = document.createElement("div");
  viewChat.setAttribute("id", "individualChatContainer");
  viewChat.innerHTML = `
    <header id="headerChat">
      <figure id="characterPhotoName">
        <img src="" alt="">
      </figure>
      <p id="characterName">${data.id}</p>
      <button id="chatOptions">
        <i class="fa-solid fa-ellipsis" id="optionIcons"></i>
      </button>

      <div id="optionsIndividualChat">
        <button id= "homeBack" class= "btnHome">
          <img src= "../icons/home.svg" alt= "Inicio">
        </button>
        <button class = "chatGroupBtn"> 
          <img src= "../icons/message-group.svg" alt= "Chat Grupal">
        </button>
      </div>
    </header>
    <main id="mainChat">
      <div id="mesaggeSent">
        <div class="dialogueBubbles"></div>
        <figure class="photoBubble" id="photoBubbleCharacter /* props */">
          <img src="" alt="">
        </figure>
      </div>
      <div id="mesaggeReceived">
        <div class="dialogueBubbles"></div>
        <figure class="photoBubble" id="photoBubbleUser">
          <img src="" alt="">
        </figure>
      </div>
    </main>
    <footer id="footerIndividualChat">
      <div id="divTypingBar">
        <input id="typingBar" type="text" placeholder="Escribele algo a ${props}"></input>
        <button id="btnChatSent">
          <img src="../icons/send-button.svg" alt="send-button" id="sendButtonIcon">
        </button>
      </div>
    </footer>
    `;
/*   data.forEach(() => {
  }); */
  return viewChat;
};
