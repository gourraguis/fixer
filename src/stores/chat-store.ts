import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

import { INITIAL_MESSAGES } from '@/constants/messages';
import { INITIAL_SUGGESTIONS } from '@/constants/suggestions';
import { Message } from '@/types/message';
import { Suggestion } from '@/types/suggestion';

interface ChatState {
  messages: Message[];
  suggestions: Suggestion[];
  isLoading: boolean;
  addMessage: (message: Omit<Message, 'id'>) => Promise<void>;
  setSuggestions: (suggestions: Suggestion[]) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: INITIAL_MESSAGES.map((message) => ({
    ...message,
    id: uuidv4(),
  })),
  suggestions: INITIAL_SUGGESTIONS,
  isLoading: false,
  addMessage: async (message) => {
    const newMessage: Message = {
      id: uuidv4(),
      ...message,
    };

    set((state) => ({
      messages: [...state.messages, newMessage],
      suggestions: [],
    }));

    if (message.role === 'user') {
      set({ isLoading: true });

      // --- Fetch Chat Reply ---
      try {
        const chatResponse = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: get().messages }),
        });

        if (!chatResponse.ok) {
          throw new Error('Chat API call failed');
        }

        const chatData = await chatResponse.json();
        const replyMessage: Message = {
          id: uuidv4(),
          text: chatData.reply,
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

      // --- Fetch Suggestions (Silently) ---
      try {
        const suggestionsResponse = await fetch('/api/suggestions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: get().messages }),
        });

        if (suggestionsResponse.ok) {
          const suggestionsData = await suggestionsResponse.json();
          set({ suggestions: suggestionsData.suggestions || [] });
        } else {
          console.error('Suggestions API call failed');
        }
      } catch (error) {
        console.error('Suggestion fetch failed:', error);
        // Do not show an error message for suggestions, as it's non-critical.
      }
    }
  },
  setSuggestions: (suggestions) => {
    set({ suggestions });
  },
}));
