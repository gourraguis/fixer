import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

import { INITIAL_MESSAGES } from '@/constants/messages';
import { Message } from '@/types/message';

interface ChatState {
  messages: Message[];
  isLoading: boolean;
  addMessage: (message: Omit<Message, 'id'>) => Promise<void>;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: INITIAL_MESSAGES.map((message) => ({
    ...message,
    id: uuidv4(),
  })),
  isLoading: false,
  addMessage: async (message) => {
    const newMessage: Message = {
      id: uuidv4(),
      ...message,
    };

    set((state) => ({
      messages: [...state.messages, newMessage],
    }));

    if (message.role === 'user') {
      set({ isLoading: true });
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: get().messages,
          }),
        });

        if (!response.ok) {
          throw new Error('API call failed');
        }

        const data = await response.json();
        const replyMessage: Message = {
          id: uuidv4(),
          text: data.reply,
          role: 'model',
        };
        set((state) => ({
          messages: [...state.messages, replyMessage],
        }));
      } catch (error) {
        const errorMessage: Message = {
          id: uuidv4(),
          text: "Whoops! My AI assistant must be on a coffee break, or I've forgotten to pay the cloud bill again. Please reach out to me on email or LinkedIn instead.",
          role: 'model',
        };
        set((state) => ({
          messages: [...state.messages, errorMessage],
        }));
      } finally {
        set({ isLoading: false });
      }
    }
  },
}));
