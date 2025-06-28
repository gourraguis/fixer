import { GeminiClient } from '@/utils/gemini-client';
import { Message } from '@/types/message';
import { Suggestion } from '@/types/suggestion';

export class ChatService {
  private readonly geminiClient: GeminiClient;

  constructor() {
    this.geminiClient = new GeminiClient();
  }

  async generateReply(messages: Message[]): Promise<string> {
    return this.geminiClient.generateContent(messages);
  }

  async generateSuggestions(messages: Message[]): Promise<Suggestion[]> {
    return this.geminiClient.getSuggestions(messages);
  }
}
