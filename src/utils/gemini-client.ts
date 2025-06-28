import { GoogleGenAI } from '@google/genai';
import { SUGGESTION_PROMPT, SYSTEM_PROMPT } from '@/constants/prompts';
import { Message } from '@/types/message';
import { Suggestion } from '@/types/suggestion';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set');
}

const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export class GeminiClient {
  private readonly model: string = 'gemini-2.5-flash';

  async generateContent(messages: Message[]): Promise<string> {
    try {
      const history = messages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));
      const result = await genAI.models.generateContent({
        model: this.model,
        contents: [
          { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
          { role: 'model', parts: [{ text: "Ok, I'm ready." }] },
          ...history,
        ],
      });
      return result.text || '';
    } catch (error) {
      console.error('Gemini API call failed:', error);
      throw new Error('Bad Gateway: Failed to get response from AI service');
    }
  }

  async getSuggestions(messages: Message[]): Promise<Suggestion[]> {
    try {
      const history = messages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));

      const result = await genAI.models.generateContent({
        model: this.model,
        contents: [
          ...history,
          { role: 'user', parts: [{ text: SUGGESTION_PROMPT }] },
        ],
        config: {
          responseMimeType: 'application/json',
        },
      });

      const text = result.text;
      if (text) {
        return JSON.parse(text);
      }
      return [];
    } catch (error) {
      console.error('Suggestion generation failed:', error);
      return [];
    }
  }
}
