import { communicateWithOpenAI } from "../src/lib/openAIApi.js"; //también necesita la apikey
import { getApiKey } from "../src/lib/apiKey.js";

jest.mock("../src/lib/apiKey", () => ({
  getApiKey: jest.fn(),
}));

getApiKey.mockImplementation(() => "123456789");

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

let originalFetch;

beforeEach(() => {
  originalFetch = jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeAPIresponse),
    })
  );
});

afterEach(() => {
  originalFetch.mockRestore();
});

describe("communicateWithOpenAI", () => {
  test("communicateWithOpenAI", async () => {
    return communicateWithOpenAI("Pluto", "Hola").then((data) => {
      expect(data).toBe(fakeAPIresponse);
    });
  });
});

/* global.fetch = jest.fn() */
/* beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeAPIresponse),
    })
  );
}) */
//afterEach
//-> resolve/reject

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

/* it("returns the API data expected"), async () => {
  const data = await communicateWithOpenAI("pluto", "Hola");
  console.log(data)

  expect(data).toEqual(fakeAPIresponse);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(
    "https://api.openai.com/v1/chat/completions"
  );
}; */
