import * as React from 'react';

import { Message } from '@/components/ui/message';
import { cn } from '@/lib/utils';
import type { Message as MessageType } from '@/types';

export interface MessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  messages: MessageType[];
}

const MessageList = React.forwardRef<HTMLDivElement, MessageListProps>(
  ({ className, messages, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-4', className)}
        {...props}
      >
        {messages.map((message, index) => (
          <Message
            key={index}
            variant={message.variant}
            text={message.text}
          />
        ))}
      </div>
    );
  },
);
MessageList.displayName = 'MessageList';

export { MessageList };
