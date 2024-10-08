import { navigateTo } from "../router.js";

export const renderItems = (data) => {
  const elementUl = document.createElement("ul");
  elementUl.setAttribute("class", "flex-container");
  data.forEach(function (data) {
    const elementLi = document.createElement("li");
    elementLi.setAttribute("itemtype", "item-flex");
    elementLi.setAttribute("itemscope", "item-segundo");
    elementUl.appendChild(elementLi);
    elementLi.innerHTML = `
      <div id="text-card">
        <div id="text">
          <dl id="textoDeTarjetas" itemscop itemtype = "mascotasDisney">
            <dt id="spanName">Conoce a <span itemprop="name">${data.name}</span>:</dt>
              <div id="text-card-section">
                <dd id="shortDesc" itemprop="shortDescription">${data.shortDescription}</dd>
                <dd><span class="spanFacts">Especie: </span><span itemprop="species">${data.facts.species}</span></dd>
                <dd><span class="spanFacts">Vive en: </span><span itemprop="livesIn">${data.facts.livesIn}</span></dd>
                <dd><span class="spanFacts">Género de la película: </span><span itemprop="filmGenre">${data.facts.filmGenre}</span></dd>
              </div>
            <dd id="fact-fun"><span class="fun-fact">Dato curioso:</span><span itemprop="curiousFact"> ${data.extraInfo.curiousFact}</span><dd>
          </dl>
        </div>
        <div id="divFondoPersonaje" class="background-color-${data.id}">
          <img class="imgPersonaje" src = ${data.imageUrl} alt = "Aquí estaba ${data.name}">  
          <div id="divIndividualMsgIcon">
            <div id="btnWrapHablemos">
              <span id="spanHablemos">¡Hablemos!</span>
              <button id="individualMsgIcon" data-identifier="${data.id}">
                <img src="../../icons/individual-msg-icon.svg" alt="message-individual-icon">
              </button>
          </div>
          </div>
        </div>
      </div>
      `;
    const btnIndividualChat = elementLi.querySelector("#individualMsgIcon");
    const btndataId = btnIndividualChat.dataset.identifier;
    //? NAVIGATETO:
    btnIndividualChat.addEventListener("click", (/* target */) => {
      const props = {
        soy: btndataId,
      };
      navigateTo("/chat", props);
    });
  });
  return elementUl;
};
