//import axios from "axios";
import { getApiKey } from "./apiKey.js";

//almacenando el valor de la apikey ingresada en el input
const myAPIkey = getApiKey("inputApiKey");
console.log("Imprimiendo APIkey", myAPIkey);

export const communicateWithOpenAI = async (character, messages, bodyChat) => {
  //se ejecuta al principio pero si ocurre un error pasa al bloque catch
  try {
    //enviando una solicitud POST a la URL de la API de OpenAI
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: `Eres ${character}, un personaje de Disney, toma el rol y la personalidad de este personaje y responde como si fueras él. No es necesario que saludes en todas las respuestas, procura hacerlo solo cuando inicia la conversación, además manten el estilo del personaje, su personalidad. Recuerda que la respuesta debería estar formulada en menos de 150 palabras`,
          },
          { role: "user", content: messages },
        ], //mensaje que se le envía a la IA, se esta concatenando el nombre del personaje con el mensaje de usuario
        max_tokens: 150, //cuantas palabras o caracteres se espera de la respuesta
        temperature: 1, //creatividad de la respuesta (entre 0 y 1)
      },
      {
        headers: {
          Authorization: `Bearer ${myAPIkey}`, //pasando la clave de la API para autenticar la solicitud
        },
      }
    );
    console.log("Response: ", response);
    //accediendo al texto generado por la IA y eliminando los espacios en blanco del inicio y del final
    const aiResponse = response.data.choices[0].message.content;
    //función para renderizar el mensaje
    renderMessage(aiResponse, character, bodyChat);
    console.log("Respuesta de chat", aiResponse);
    //console.log('Imprimiendo bodychat', bodyChat)
  } catch (error) {
    //imprimiendo en la consola si hay algun error:
    console.error("Error fetching AI response: ", error);
    renderMessage(
      "Lo siento, hubo un error al procesar tu mensaje",
      character,
      bodyChat
    );
  }
  //Aquí es donde debes implementar la petición con fetch o axios
};

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
