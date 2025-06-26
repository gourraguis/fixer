import * as React from 'react';

import { cn } from '@/lib/utils';
import { Message } from '@/components/ui/message';

export interface MessageListProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageList = React.forwardRef<HTMLDivElement, MessageListProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex flex-col space-y-4', className)}
        {...props}
      >
        <Message
          variant="received"
          text="Hello! How can I help you today?"
        />
        <Message
          variant="sent"
          text="I'd like to know more about your services."
        />
      </div>
    );
  },
);
MessageList.displayName = 'MessageList';

export { MessageList };
