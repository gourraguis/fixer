'use client';

import { ChatInput } from '@/components/chat/chat-input';
import { Header } from '@/components/chat/header';
import { MessageList } from '@/components/chat/messagelist';
import { useMessages } from '@/hooks/use-messages';

export default function Home() {
  const { messages, addMessage, isLoading } = useMessages();

  return (
    <main className="flex h-screen flex-col bg-background">
      <div className="flex h-full w-full flex-col">
        <Header addMessage={addMessage} />
        <div className="flex flex-1 flex-col bg-zinc-100 dark:bg-zinc-900">
          <MessageList
            messages={messages}
            isLoading={isLoading}
            className="flex-1 p-4"
          />
          <ChatInput addMessage={addMessage} isLoading={isLoading} className="p-3" />
        </div>
      </div>
    </main>
  );
}
