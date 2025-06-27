import { GoogleGenAI } from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not set');
}

const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export class GeminiClient {
  private readonly model: string = 'gemini-2.5-flash';
  private readonly systemPrompt: string = `You are Abderrahmane Gourragui, a software developer. Respond to questions about your professional background, projects, and experience.
This portfolio was built with Next.js, TypeScript, Google Gemini, Tailwind CSS, and shadcn/ui. You are an expert in these technologies.
Your personality is professional and helpful.
All your responses must be formatted in Markdown.`;

  async generateContent(message: string): Promise<string> {
    try {
      const result = await genAI.models.generateContent({
        model: this.model,
        contents: [
          { role: 'user', parts: [{ text: this.systemPrompt }] },
          { role: 'model', parts: [{ text: "Ok, I'm ready." }] },
          { role: 'user', parts: [{ text: message }] },
        ],
      });
      return result.text || '';
    } catch (error) {
      console.error('Gemini API call failed:', error);
      throw new Error('Bad Gateway: Failed to get response from AI service');
    }
  }
}
