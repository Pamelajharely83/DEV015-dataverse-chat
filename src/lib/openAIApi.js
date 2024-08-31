import { getApiKey } from "./apiKey.js";

const myAPIkey = getApiKey("inputApiKey");

export const communicateWithOpenAI = async (character, messages) => {
  //todo: testear si está recibiendo correctamente los parámetros
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${myAPIkey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `Eres ${character}, un personaje de Disney, toma el rol y la personalidad de este personaje y responde como si fueras él. No es necesario que saludes en todas las respuestas, procura hacerlo solo cuando inicia la conversación, además manten el estilo del personaje, su personalidad. Recuerda que la respuesta debería estar formulada en menos de 150 palabras`,
        },
        { role: "user", content: messages },
      ],
      max_tokens: 150,
      temperature: 1,
    }),
  };
  return fetch("https://api.openai.com/v1/chat/completions", options)
    .then((response) => response.json())
    .then((data) => {
      const aiResponse = data.choices[0].message.content;
      return aiResponse;
    })
    .catch((error) => {
      error;
    });
};

//moverlo a un componente 
export const renderMessage = (response, sender, bodyChat) => {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("containerMessage", sender);

  const messageElement = document.createElement("div");
  messageElement.classList.add("dialogueBubbles", sender);
  messageElement.innerText = response;

  messageContainer.appendChild(messageElement);
  const bodyChatElement = bodyChat.querySelector("#mainChat");
  bodyChatElement.appendChild(messageContainer);
};
