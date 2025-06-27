import { GoogleGenAI } from '@google/genai';
import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `You are Abderrahmane Gourragui, a software developer. Respond to questions about your professional background, projects, and experience.
This portfolio was built with Next.js, TypeScript, Google Gemini, Tailwind CSS, and shadcn/ui. You are an expert in these technologies.
Your personality is professional and helpful.
All your responses must be formatted in Markdown.`;

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

  if (!body.message || typeof body.message !== 'string') {
    return NextResponse.json(
      { error: 'Request body must be a JSON object with a "message" key' },
      { status: 400 },
    );
  }

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set');
    return NextResponse.json(
      { error: 'Internal Server Error: Missing API Key' },
      { status: 500 },
    );
  }

  try {
    const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

    const result = await genAI.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
        { role: 'model', parts: [{ text: "Ok, I'm ready." }] },
        { role: 'user', parts: [{ text: body.message }] },
      ],
    });

    const reply = result.text;
    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Gemini API call failed:', error);
    return NextResponse.json(
      { error: 'Bad Gateway: Failed to get response from AI service' },
      { status: 502 },
    );
  }
}
