import { Message } from '@/types/message';

export const INITIAL_MESSAGES: Omit<Message, 'id'>[] = [
  {
    role: 'model',
    text: "Hello, I'm Abderrahmane. I build high-impact software.",
  },
  {
    role: 'model',
    text: 'You can ask me about the stories behind the code, paste a job description for a detailed analysis, or use the suggestions below to start a tour.',
  },
];
