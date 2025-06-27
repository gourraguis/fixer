import * as React from 'react';

import { cn } from '@/lib/utils';

export interface MessageProps {
  text: string;
  variant: 'sent' | 'received';
  className?: string;
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, text, variant }, ref) => {
    return (
      <div
        className={cn(
          'flex w-full',
          variant === 'sent' ? 'justify-end' : 'justify-start'
        )}
      >
        <div
          ref={ref}
          className={cn(
            'max-w-xs rounded-lg p-2 break-words',
            {
              'bg-primary text-primary-foreground': variant === 'sent',
              'bg-muted text-muted-foreground': variant === 'received',
            },
            className
          )}
        >
          {text}
        </div>
      </div>
    );
  }
);
Message.displayName = 'Message';

export { Message };
