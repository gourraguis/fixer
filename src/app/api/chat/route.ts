import { NextRequest } from 'next/server';
import { ChatService } from '@/services/chat-service';
import { ConversationService } from '@/services/conversation-service';
import { Message } from '@/types/message';

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Invalid request body' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { messages, conversationId } = body;

  if (!messages || !Array.isArray(messages) || !conversationId) {
    return new Response(
      JSON.stringify({
        error:
          'Request body must be a JSON object with "messages" (Array) and "conversationId" (string) keys.',
      }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  try {
    const chatService = new ChatService();
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        let fullReply = '';

        try {
          for await (const chunk of chatService.generateStreamingReply(
            messages
          )) {
            fullReply += chunk;
            controller.enqueue(encoder.encode(chunk));
          }

          if (process.env.NODE_ENV === 'production') {
            const conversationService = new ConversationService();
            const updatedMessages: Message[] = [
              ...messages,
              { id: '', role: 'model', text: fullReply },
            ];
            await conversationService.saveConversation(
              conversationId,
              updatedMessages
            );
          }
        } catch (error) {
          console.error('Error during stream generation or saving:', error);
          // The stream is already closed by the time we get here,
          // so we can't send an error message down the stream.
          // The client will need to handle the abrupt stream closure.
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error: any) {
    console.error('Chat service failed:', error);
    const status = error.message.includes('GEMINI_API_KEY') ? 500 : 502;
    const errorMessage =
      status === 500
        ? 'Internal Server Error: Missing API Key'
        : 'Bad Gateway: Failed to get response from AI service';
    return new Response(JSON.stringify({ error: errorMessage }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
