import { NextResponse } from 'next/server';

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

  // Add a 2-second delay for testing
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return NextResponse.json({ reply: body.message });
}
