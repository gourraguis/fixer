import * as React from 'react';
import { Message } from '@/components/chat/message/message';
import { cn } from '@/lib/utils';
import { useChatStore } from '@/stores/chat-store';
import styles from './messagelist.module.css';

export interface MessageListProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageList = React.forwardRef<HTMLDivElement, MessageListProps>(
  ({ className, ...props }, ref) => {
    const messagesEndRef = React.useRef<HTMLDivElement>(null);
    const { messages, suggestions } = useChatStore();

    React.useEffect(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, suggestions]);

    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col space-y-4 overflow-y-auto pb-4',
          className,
          styles.messageList,
        )}
        {...props}
      >
        {messages.flatMap((message, messageIndex) => {
          const paragraphs =
            message.role === 'model'
              ? message.text.split('\n\n')
              : [message.text];

          return paragraphs
            .filter((p) => p.trim() !== '')
            .map((paragraph, paragraphIndex) => (
              <Message
                key={`${messageIndex}-${paragraphIndex}`}
                role={message.role}
                text={paragraph}
              />
            ));
        })}
        <div ref={messagesEndRef} />
      </div>
    );
  },
);
MessageList.displayName = 'MessageList';

export { MessageList };
