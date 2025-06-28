import { Message } from '@/types/message';

export const INITIAL_MESSAGES: Omit<Message, 'id'>[] = [
  {
    role: 'model',
    text: "Hi, I'm Abderrahmane's digital twin.",
  },
  {
    role: 'model',
    text: 'You can paste a job description for a detailed analysis, type any question you have, or use the suggestions below to start a tour.',
  },
];
