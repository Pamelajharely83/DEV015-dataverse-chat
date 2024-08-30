import { communicateWithOpenAI } from "../src/lib/openAIApi";

//const expectAPIresponse = {"Hola, soy Pluto"};

const fakeAPIresponse = {
  id: "chatcmpl-A1mSyMFIlBQW1rlDJtqe7Xy8FGuO9",
  object: "chat.completion",
  created: 1724987996,
  model: "gpt-4o-2024-05-13",
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content:
          "¡Guau guau! ¡Hola! ¡Soy Pluto! ¿Cómo te va? ¡Estoy listo para cualquier aventura contigo!",
        refusal: null,
      },
      logprobs: null,
      finish_reason: "stop",
    },
  ],
  usage: {
    prompt_tokens: 83,
    completion_tokens: 26,
    total_tokens: 109,
  },
  system_fingerprint: "fp_157b3831f5",
};

//const global = globalThis

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(fakeAPIresponse),
  })
);
//global.fetch = jest.fn(() => {}) -> devuelve una función con todos los conectores de mock
it("returns the API data expected"), async () => {
  const data = await communicateWithOpenAI("pluto", "Hola");

  expect(data).toEqual(fakeAPIresponse);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://api.openai.com/v1/chat/completions"
  );
};

/* describe("communicateWithOpenAI", () => {
  const chatbody = document.createElement("div");
  test("communicateWithOpenAI", async () => {
    return communicateWithOpenAI(
      "Pluto",
      "Hola, cuéntame de ti",
      chatbody
    ).then((response) => {
      expect(response).toBe(response);
    });
  });
}); */
