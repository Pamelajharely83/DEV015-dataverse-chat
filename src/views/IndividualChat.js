export const IndividualChat = (props) => {
  const viewChat = document.createElement("div");

  viewChat.innerHTML = `
    <header id="headerChat">
      <figure id="characterPhotoName /* props */">
        <img src="" alt="">
        <p id="characterName /* props */"></p>
      </figure>
      <button id="chatOptions">
        <i class="fa-solid fa-ellipsis"></i>
      </button>
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
    <footer>
      <input id="typingBar /* props */" type="text" placeholder="Escribele algo a /* props */"></input>
      <button id="btnChatSent" type="submit">
        <img src="../icons/send-button.svg" alt="send-button" id="sendButtonIcon">
      </button>
    </footer>
    `;
  return viewChat;
};
