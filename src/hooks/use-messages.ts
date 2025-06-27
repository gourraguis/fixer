import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type Message } from '@/types';

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uuidv4(),
      text: 'Hello! How can I help you today?',
      variant: 'received',
    },
  ]);

  const addMessage = (message: Omit<Message, 'id'>) => {
    const newMessage: Message = {
      id: uuidv4(),
      ...message,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return {
    messages,
    addMessage,
  };
};
