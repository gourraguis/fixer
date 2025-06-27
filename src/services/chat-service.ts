import { GeminiClient } from '@/utils/gemini-client';

export class ChatService {
  private readonly geminiClient: GeminiClient;

  constructor() {
    this.geminiClient = new GeminiClient();
  }

  async generateReply(message: string): Promise<string> {
    return this.geminiClient.generateContent(message);
  }
}
