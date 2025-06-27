import * as React from 'react';

import { Message } from '@/components/chat/message';
import { TypingIndicator } from '@/components/chat/typing-indicator';
import { cn } from '@/lib/utils';
import type { Message as MessageType } from '@/types';

export interface MessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: MessageType[];
  isLoading?: boolean;
}

const MessageList = React.forwardRef<HTMLDivElement, MessageListProps>(
  ({ className, messages, isLoading, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-4 overflow-y-auto pb-4', className)}
        {...props}
      >
        {messages.map((message, index) => (
          <Message
            key={index}
            variant={message.variant}
            text={message.text}
          />
        ))}
        {isLoading && <TypingIndicator />}
      </div>
    );
  },
);
MessageList.displayName = 'MessageList';

export { MessageList };
