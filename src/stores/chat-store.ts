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

interface ChatState {
  messages: Message[];
  suggestions: Suggestion[];
  isLoading: boolean;
  conversationId: string;
  addMessage: (message: Omit<Message, 'id'>) => Promise<void>;
  setSuggestions: (suggestions: Suggestion[]) => void;
  hydrate: () => void;
  reset: () => void;
}

const defaultMessages = INITIAL_MESSAGES.map((message) => ({
  ...message,
  id: uuidv4(),
}));

export const useChatStore = create<ChatState>((set, get) => ({
  messages: defaultMessages,
  suggestions: INITIAL_SUGGESTIONS,
  isLoading: false,
  conversationId: '',
  hydrate: () => {
    const storedId = getLocalStorageItem(LocalStorageKeys.CONVERSATION_ID, '');
    let conversationId = storedId;
    if (!storedId) {
      conversationId = uuidv4();
      setLocalStorageItem(LocalStorageKeys.CONVERSATION_ID, conversationId);
    }

    const storedMessages = getLocalStorageItem(
      LocalStorageKeys.MESSAGES,
      defaultMessages
    );

    const storedSuggestions = getLocalStorageItem(
      LocalStorageKeys.SUGGESTIONS,
      INITIAL_SUGGESTIONS
    );

    set({
      conversationId,
      messages: storedMessages,
      suggestions: storedSuggestions,
    });
  },
  addMessage: async (message) => {
    const newMessage: Message = {
      id: uuidv4(),
      ...message,
    };

    const updatedMessagesWithUser = [...get().messages, newMessage];
    setLocalStorageItem(LocalStorageKeys.MESSAGES, updatedMessagesWithUser);
    setLocalStorageItem(LocalStorageKeys.SUGGESTIONS, []);
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
          const newSuggestions = suggestionsData.suggestions || [];
          setLocalStorageItem(LocalStorageKeys.SUGGESTIONS, newSuggestions);
          set({ suggestions: newSuggestions });
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
    setLocalStorageItem(LocalStorageKeys.SUGGESTIONS, suggestions);
    set({ suggestions });
  },
  reset: () => {
    set({
      messages: defaultMessages,
      suggestions: INITIAL_SUGGESTIONS,
      conversationId: '',
    });
  },
}));
