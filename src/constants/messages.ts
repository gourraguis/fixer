import { type Message } from '@/types/message';

export const INITIAL_MESSAGES: Omit<Message, 'id'>[] = [
  {
    text: "Welcome to my portfolio! I'm Abderrahmane's AI twin, built to give you a dynamic tour of my experience.",
    role: 'model',
  },
  {
    text: "Here are a few things you can do to get started:\n- Paste a job description and I'll analyze how I fit the role.\n- Ask for a deep dive on a technology or industry I've worked in.\n- Ask about my most challenging project.",
    role: 'model',
  },
];
