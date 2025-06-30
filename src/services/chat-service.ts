import { GeminiClient } from '@/utils/gemini-client';
import { Message } from '@/types/message';
import { Suggestion } from '@/types/suggestion';

export class ChatService {
  private readonly geminiClient: GeminiClient;

  constructor() {
    this.geminiClient = new GeminiClient();
  }

  async *generateStreamingReply(
    messages: Message[]
  ): AsyncGenerator<string, void, unknown> {
    yield* this.geminiClient.generateContentStream(messages);
  }

  async generateSuggestions(messages: Message[]): Promise<Suggestion[]> {
    return this.geminiClient.getSuggestions(messages);
  }
}
