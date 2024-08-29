// test/openAIApi.spec.js

import { communicateWithOpenAI } from '../src/lib/openAIApi';
//import MockAdapter from 'axios-mock-adapter';



describe('communicateWithOpenAI', () => {
  const chatbody = document.createElement('div'); 
  test('communicateWithOpenAI', async () => {
    return communicateWithOpenAI('Pluto', 'Hola, cuéntame de ti', chatbody).then(response => {
      expect(response).toBe(response);
    });
  });
});