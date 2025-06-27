import * as React from 'react';
import ReactMarkdown from 'react-markdown';

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
            'prose max-w-2xl lg:max-w-4xl rounded-lg p-3 shadow-md break-words',
            {
              'bg-primary text-primary-foreground': variant === 'sent',
              'bg-muted text-muted-foreground': variant === 'received',
            },
            className,
          )}
        >
          <ReactMarkdown
            components={{
              ul: ({ node: _, ...props }) => (
                <ul className="list-disc list-inside" {...props} />
              ),
              ol: ({ node: _, ...props }) => (
                <ol className="list-decimal list-inside" {...props} />
              ),
              p: ({ node: _, ...props }) => (
                <p className="mb-2 last:mb-0" {...props} />
              ),
            }}
          >
            {text}
          </ReactMarkdown>
        </div>
      </div>
    );
  },
);
Message.displayName = 'Message';

export { Message };
