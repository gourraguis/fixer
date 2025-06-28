import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import { cn } from '@/lib/utils';
import styles from './message.module.css';

export interface MessageProps {
  text: string;
  role: 'user' | 'model';
  className?: string;
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, text, role }, ref) => {
    return (
      <div
        className={cn(
          'flex w-full',
          role === 'user' ? 'justify-end' : 'justify-start'
        )}
      >
        <div
          ref={ref}
          className={cn(
            styles.message,
            'prose max-w-2xl lg:max-w-4xl rounded-lg p-3 shadow-md break-words',
            {
              'text-primary-foreground': role === 'user',
              'text-muted-foreground': role === 'model',
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
