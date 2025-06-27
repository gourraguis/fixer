import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { type Message } from '@/types';
import { INITIAL_MESSAGES } from '@/constants/messages';

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>(() =>
    INITIAL_MESSAGES.map((message) => ({
      ...message,
      id: uuidv4(),
    })),
  );
  const [isLoading, setIsLoading] = useState(false);

  const addMessage = async (message: Omit<Message, 'id'>) => {
    const newMessage: Message = {
      id: uuidv4(),
      ...message,
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    if (message.variant === 'sent') {
      setIsLoading(true);
      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: message.text }),
        });

        if (!response.ok) {
          throw new Error('API call failed');
        }

        const data = await response.json();
        const replyMessage: Message = {
          id: uuidv4(),
          text: data.reply,
          variant: 'received',
        };
        setMessages((prevMessages) => [...prevMessages, replyMessage]);
      } catch (error) {
        const errorMessage: Message = {
          id: uuidv4(),
          text: "Whoops! My AI assistant must be on a coffee break, or I've forgotten to pay the cloud bill again. Please reach out to me on email or LinkedIn instead.",
          variant: 'received',
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    messages,
    addMessage,
    isLoading,
  };
};
