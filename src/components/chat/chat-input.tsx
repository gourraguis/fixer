'use client';

import { Send } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Message } from '@/types';

export interface ChatInputProps extends React.HTMLAttributes<HTMLFormElement> {
  addMessage: (message: Omit<Message, 'id'>) => void;
  isLoading?: boolean;
}

const ChatInput = React.forwardRef<HTMLFormElement, ChatInputProps>(
  ({ className, addMessage, isLoading, ...props }, ref) => {
    const [input, setInput] = React.useState('');
    const textareaRef = React.useRef<HTMLTextAreaElement>(null);

    const isInputEmpty = !input.trim();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isInputEmpty || isLoading) return;
      addMessage({ text: input, variant: 'sent' });
      setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e as any);
      }
    };

    React.useEffect(() => {
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [input]);

    return (
      <form
        {...props}
        ref={ref}
        onSubmit={handleSubmit}
        className={cn('flex w-full items-center space-x-2', className)}
      >
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 shadow-lg"
          disabled={isLoading}
          rows={1}
        />
        <Button
          type="submit"
          size="icon"
          disabled={isInputEmpty || isLoading}
          className="shadow-lg"
        >
          <Send className="h-4 w-4" />
          <span className="sr-only">Send</span>
        </Button>
      </form>
    );
  },
);
ChatInput.displayName = 'ChatInput';

export { ChatInput };
