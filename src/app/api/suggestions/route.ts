import { NextRequest, NextResponse } from 'next/server';
import { ChatService } from '@/services/chat-service';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    if (!messages) {
      return NextResponse.json(
        { error: 'Missing messages in request body' },
        { status: 400 },
      );
    }

    const chatService = new ChatService();
    const suggestions = await chatService.generateSuggestions(messages);
    return NextResponse.json({ suggestions });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
