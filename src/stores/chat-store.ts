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
  addMessage: (message: Omit<Message, 'id'>) => void;
  setSuggestions: (suggestions: Suggestion[]) => void;
  hydrate: () => void;
  reset: () => void;
}

const defaultMessages = INITIAL_MESSAGES.map((message) => ({
  ...message,
  id: uuidv4(),
}));

const _fetchChatReply = async (get: () => ChatState, set: any) => {
  const { messages, conversationId } = get();

  const modelMessageId = uuidv4();
  const newModelMessage: Message = {
    id: modelMessageId,
    role: 'model',
    text: '',
  };

  set((state: ChatState) => ({
    messages: [...state.messages, newModelMessage],
  }));

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, conversationId }),
    });

    if (!response.body) {
      throw new Error('No response body');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: readerDone } = await reader.read();
      done = readerDone;
      const chunk = decoder.decode(value, { stream: true });

      set((state: ChatState) => ({
        messages: state.messages.map((msg) =>
          msg.id === modelMessageId
            ? { ...msg, text: msg.text + chunk }
            : msg
        ),
      }));
    }
  } catch (error) {
    set((state: ChatState) => ({
      messages: state.messages.map((msg) =>
        msg.id === modelMessageId
          ? {
              ...msg,
              text: "Whoops! My AI assistant must be on a coffee break, or I've forgotten to pay the cloud bill again. Please reach out to me on email or LinkedIn instead.",
            }
          : msg
      ),
    }));
  } finally {
    set({ isLoading: false });
    // Persist the final state of the messages to local storage
    setLocalStorageItem(LocalStorageKeys.MESSAGES, get().messages);
    // Fetch suggestions silently in the background
    _fetchSuggestions(get, set);
  }
};

const _fetchSuggestions = async (get: () => ChatState, set: any) => {
  try {
    const response = await fetch('/api/suggestions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: get().messages }),
    });

    if (response.ok) {
      const data = await response.json();
      const newSuggestions = data.suggestions || [];
      setLocalStorageItem(LocalStorageKeys.SUGGESTIONS, newSuggestions);
      set({ suggestions: newSuggestions });
    } else {
      console.error('Suggestions API call failed');
    }
  } catch (error) {
    console.error('Suggestion fetch failed:', error);
  }
};

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
    const userMessage: Message = { id: uuidv4(), ...message };
    const updatedMessages = [...get().messages, userMessage];
    setLocalStorageItem(LocalStorageKeys.MESSAGES, updatedMessages);
    set({ messages: updatedMessages, suggestions: [], isLoading: true });

    if (message.role === 'user') {
      await _fetchChatReply(get, set);
    } else {
      set({ isLoading: false });
    }
  },
  setSuggestions: (suggestions) => {
    setLocalStorageItem(LocalStorageKeys.SUGGESTIONS, suggestions);
    set({ suggestions });
  },
  reset: () => {
    const newConversationId = uuidv4();
    setLocalStorageItem(LocalStorageKeys.CONVERSATION_ID, newConversationId);
    set({
      messages: defaultMessages,
      suggestions: INITIAL_SUGGESTIONS,
      conversationId: newConversationId,
    });
  },
}));
