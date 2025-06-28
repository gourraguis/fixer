import { create } from 'zustand';
import { v4 as uuidv4 } from 'uuid';

import { INITIAL_MESSAGES } from '@/constants/messages';
import { INITIAL_SUGGESTIONS } from '@/constants/suggestions';
import { Message } from '@/types/message';
import { Suggestion } from '@/types/suggestion';
import {
  getLocalStorageItem,
  setLocalStorageItem,
  LocalStorageKeys,
} from '@/utils/local-storage';

const getInitialConversationId = (): string => {
  const storedId = getLocalStorageItem(LocalStorageKeys.CONVERSATION_ID, '');
  if (storedId) {
    return storedId;
  }
  const newId = uuidv4();
  setLocalStorageItem(LocalStorageKeys.CONVERSATION_ID, newId);
  return newId;
};

const getInitialMessages = (): Message[] => {
  const defaultMessages = INITIAL_MESSAGES.map((message) => ({
    ...message,
    id: uuidv4(),
  }));
  return getLocalStorageItem(LocalStorageKeys.MESSAGES, defaultMessages);
};

interface ChatState {
  messages: Message[];
  suggestions: Suggestion[];
  isLoading: boolean;
  conversationId: string;
  addMessage: (message: Omit<Message, 'id'>) => Promise<void>;
  setSuggestions: (suggestions: Suggestion[]) => void;
}

export const useChatStore = create<ChatState>((set, get) => ({
  messages: getInitialMessages(),
  suggestions: INITIAL_SUGGESTIONS,
  isLoading: false,
  conversationId: getInitialConversationId(),
  addMessage: async (message) => {
    const newMessage: Message = {
      id: uuidv4(),
      ...message,
    };

    const updatedMessagesWithUser = [...get().messages, newMessage];
    setLocalStorageItem(LocalStorageKeys.MESSAGES, updatedMessagesWithUser);
    set({ messages: updatedMessagesWithUser, suggestions: [] });

    if (message.role === 'user') {
      set({ isLoading: true });

      const { messages, conversationId } = get();

      // --- Fetch Chat Reply ---
      try {
        const chatResponse = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages, conversationId }),
        });

        if (!chatResponse.ok) {
          throw new Error('Chat API call failed');
        }

        const chatData = await chatResponse.json();
        const replyMessage: Message = {
          id: uuidv4(),
          role: 'model',
          text: chatData.reply,
        };

        const updatedMessagesWithReply = [...get().messages, replyMessage];
        setLocalStorageItem(LocalStorageKeys.MESSAGES, updatedMessagesWithReply);
        set({ messages: updatedMessagesWithReply });
      } catch (error) {
        const errorMessage: Message = {
          id: uuidv4(),
          role: 'model',
          text:
            "Whoops! My AI assistant must be on a coffee break, or I've forgotten to pay the cloud bill again. Please reach out to me on email or LinkedIn instead.",
        };
        const updatedMessagesWithError = [...get().messages, errorMessage];
        setLocalStorageItem(LocalStorageKeys.MESSAGES, updatedMessagesWithError);
        set({ messages: updatedMessagesWithError });
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
