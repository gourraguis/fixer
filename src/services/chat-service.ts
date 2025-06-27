import { GeminiClient } from '@/utils/gemini-client';
import { Message } from '@/types/message';

export class ChatService {
  private readonly geminiClient: GeminiClient;

  constructor() {
    this.geminiClient = new GeminiClient();
  }

  async generateReply(messages: Message[]): Promise<string> {
    return this.geminiClient.generateContent(messages);
  }
}
