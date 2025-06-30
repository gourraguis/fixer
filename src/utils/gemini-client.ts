import {
  GoogleGenAI,
  Content,
  GenerateContentResponse,
} from '@google/genai';
import { SUGGESTION_PROMPT, SYSTEM_PROMPT } from '@/constants/prompts';
import { Message } from '@/types/message';
import { Suggestion } from '@/types/suggestion';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set');
}

const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export class GeminiClient {
  private readonly chatModel: string = 'gemini-1.5-flash';
  private readonly suggestionModel: string = 'gemini-1.5-flash';

  /**
   * A non-streaming method to generate content.
   * NOTE: This is not currently used by the chat but is kept for other potential uses.
   */
  async generateContent(messages: Message[]): Promise<string> {
    const stream = this.generateContentStream(messages);
    let text = '';
    for await (const chunk of stream) {
      text += chunk;
    }
    return text;
  }

  async *generateContentStream(
    messages: Message[]
  ): AsyncGenerator<string, void, unknown> {
    try {
      const lastMessage = messages.pop();
      if (!lastMessage) {
        return;
      }

      const history: Content[] = messages.map((msg) => ({
        role: msg.role,
        parts: [{ text: msg.text }],
      }));

      // Prepend the system prompt to the history for the chat session
      const fullHistory: Content[] = [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: "Ok, I'm ready." }] },
        ...history,
      ];

      const chat = genAI.chats.create({
        model: this.chatModel,
        history: fullHistory,
      });

      const result: AsyncGenerator<GenerateContentResponse> =
        await chat.sendMessageStream({
          message: lastMessage.text,
        });

      for await (const chunk of result) {
        // The `text` property is a getter that returns the concatenated text from all parts.
        yield chunk.text || '';
      }
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
        model: this.suggestionModel,
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
