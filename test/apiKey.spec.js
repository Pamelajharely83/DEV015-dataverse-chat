import { getApiKey, setApiKey } from "../src/lib/apiKey.js";

describe("getApiKey", () => {
  it("debería devolver el valor de la API Key", () => {
    localStorage.setItem("fakekey", "fakevalue");
    expect(getApiKey("fakekey")).toBe("fakevalue");
  });
});

describe("setApiKey", () => {
  it("debería establecer correctamente la API Key", () => {
    setApiKey("fakekey", "fakevalue");
    expect(localStorage.getItem("fakekey")).toBe("fakevalue");
  });
});
