import * as React from 'react';

import { Message } from '@/components/chat/message';
import { TypingIndicator } from '@/components/chat/typing-indicator';
import { cn } from '@/lib/utils';
import { useChatStore } from '@/stores/chat-store';

export interface MessageListProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageList = React.forwardRef<HTMLDivElement, MessageListProps>(
  ({ className, ...props }, ref) => {
    const messagesEndRef = React.useRef<HTMLDivElement>(null);
    const { messages, isLoading } = useChatStore();

    React.useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-4 overflow-y-auto pb-4', className)}
        {...props}
      >
        {messages.flatMap((message, messageIndex) =>
          message.text
            .split('\n\n')
            .filter((paragraph) => paragraph.trim() !== '')
            .map((paragraph, paragraphIndex) => (
              <Message
                key={`${messageIndex}-${paragraphIndex}`}
                variant={message.variant}
                text={paragraph}
              />
            )),
        )}
        {isLoading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>
    );
  },
);
MessageList.displayName = 'MessageList';

export { MessageList };
