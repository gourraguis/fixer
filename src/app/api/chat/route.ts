import { NextResponse } from 'next/server';
import { ChatService } from '@/services/chat-service';
import { ConversationService } from '@/services/conversation-service';
import { Message } from '@/types/message';



export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }

  const { messages, conversationId } = body;

  if (!messages || !Array.isArray(messages) || !conversationId) {
    return NextResponse.json(
      {
        error:
          'Request body must be a JSON object with "messages" (Array) and "conversationId" (string) keys.',
      },
      { status: 400 }
    );
  }

  try {
    const chatService = new ChatService();
    const conversationService = new ConversationService();

    const reply = await chatService.generateReply(messages);

    const updatedMessages: Message[] = [...messages, { role: 'assistant', content: reply }];
    
    // Fire-and-forget the database save operation.
    conversationService.saveConversation(conversationId, updatedMessages).catch(error => {
      console.error('Failed to save conversation in background:', error);
    });

    return NextResponse.json({ reply });
  } catch (error: any) {
    if (error.message.includes('GEMINI_API_KEY is not set')) {
      console.error(error.message);
      return NextResponse.json(
        { error: 'Internal Server Error: Missing API Key' },
        { status: 500 }
      );
    }
    console.error('Chat service failed:', error);
    return NextResponse.json(
      { error: 'Bad Gateway: Failed to get response from AI service' },
      { status: 502 }
    );
  }
}
