'use client';

import { Send } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Message } from '@/types';

export interface ChatInputProps extends React.HTMLAttributes<HTMLFormElement> {
  addMessage: (message: Message) => void;
}

const ChatInput = React.forwardRef<HTMLFormElement, ChatInputProps>(
  ({ className, addMessage, ...props }, ref) => {
    const [input, setInput] = React.useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!input.trim()) return;
      addMessage({ text: input, variant: 'sent' });
      setInput('');
    };

    return (
      <form
        {...props}
        ref={ref}
        onSubmit={handleSubmit}
        className={cn('flex w-full items-center space-x-2', className)}
      >
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1"
        />
        <Button type="submit" size="icon">
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    );
  },
);
ChatInput.displayName = 'ChatInput';

export { ChatInput };
