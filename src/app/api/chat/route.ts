import { NextResponse } from 'next/server';
import { ChatService } from '@/services/chat-service';

export const runtime = 'edge';

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 },
    );
  }

  if (!body.messages || !Array.isArray(body.messages)) {
    return NextResponse.json(
      {
        error:
          'Request body must be a JSON object with a "messages" key of type Array',
      },
      { status: 400 },
    );
  }

  try {
    const chatService = new ChatService();
    console.log('lalalalala')
    console.log(body)
    const reply = await chatService.generateReply(body.messages);
    return NextResponse.json({ reply });
  } catch (error: any) {
    if (error.message.includes('GEMINI_API_KEY is not set')) {
      console.error(error.message);
      return NextResponse.json(
        { error: 'Internal Server Error: Missing API Key' },
        { status: 500 },
      );
    }
    console.error('Chat service failed:', error);
    return NextResponse.json(
      { error: 'Bad Gateway: Failed to get response from AI service' },
      { status: 502 },
    );
  }
}
