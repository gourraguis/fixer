import clientPromise from '@/utils/mongodb-client';
import { Conversation } from '@/types/conversation';
import { Message } from '@/types/message';

const DATABASE_NAME = 'portfolio-chat';
const COLLECTION_NAME = 'conversations';

export class ConversationService {
  private async getCollection() {
    const client = await clientPromise;
    const db = client.db(DATABASE_NAME);
    return db.collection<Conversation>(COLLECTION_NAME);
  }

  async saveConversation(
    conversationId: string,
    messages: Message[]
  ): Promise<void> {
    try {
      const collection = await this.getCollection();
      const now = new Date();

      await collection.updateOne(
        { id: conversationId },
        {
          $set: {
            messages: messages,
            updatedAt: now,
          },
          $setOnInsert: {
            id: conversationId,
            createdAt: now,
          },
        },
        { upsert: true }
      );
    } catch (error) {
      console.error('Error saving conversation:', error);
      // As per requirements, fail silently and log the error.
      // The API will still return the AI response.
    }
  }
}
