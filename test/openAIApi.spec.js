// test/openAIApi.spec.js

import { communicateWithOpenAI } from '../src/lib/openAIApi';

describe('communicateWithOpenAI', () => {
  const chatbody = document.createElement('div'); 
  test('communicateWithOpenAI', async () => {
    return communicateWithOpenAI('pluto', 'Hola', chatbody).then(data => {
      expect(data).toBe('example');
    });
  });
});