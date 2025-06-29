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

const _updateMessages = (
  set: (updater: (state: ChatState) => Partial<ChatState>) => void,
  get: () => ChatState,
  newMessage: Message
) => {
  const updatedMessages = [...get().messages, newMessage];
  setLocalStorageItem(LocalStorageKeys.MESSAGES, updatedMessages);
  set((state) => ({ ...state, messages: updatedMessages }));
};

const _fetchChatReply = async (get: () => ChatState, set: any) => {
  const { messages, conversationId } = get();
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages, conversationId }),
    });

    if (!response.ok) throw new Error('Chat API call failed');

    const data = await response.json();
    const replyMessage: Message = {
      id: uuidv4(),
      role: 'model',
      text: data.reply,
    };
    _updateMessages(set, get, replyMessage);
  } catch (error) {
    const errorMessage: Message = {
      id: uuidv4(),
      role: 'model',
      text:
        "Whoops! My AI assistant must be on a coffee break, or I've forgotten to pay the cloud bill again. Please reach out to me on email or LinkedIn instead.",
    };
    _updateMessages(set, get, errorMessage);
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
    _updateMessages(set, get, userMessage);

    setLocalStorageItem(LocalStorageKeys.SUGGESTIONS, []);
    set({ suggestions: [], isLoading: true });

    if (message.role === 'user') {
      await _fetchChatReply(get, set);
      set({ isLoading: false });
      // Fetch suggestions silently in the background after the reply is received.
      _fetchSuggestions(get, set);
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
