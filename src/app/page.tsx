'use client';

import { ChatInput } from '@/components/ui/chat-input';
import { Header } from '@/components/ui/header';
import { MessageList } from '@/components/ui/messagelist';
import { useMessages } from '@/hooks/use-messages';

export default function Home() {
  const { messages, addMessage, isLoading } = useMessages();

  return (
    <main className="flex h-screen flex-col bg-background">
      <div className="flex h-full w-full flex-col">
        <Header addMessage={addMessage} />
        <MessageList
          messages={messages}
          isLoading={isLoading}
          className="flex-1 bg-zinc-100 p-4 dark:bg-zinc-900"
        />
        <ChatInput addMessage={addMessage} isLoading={isLoading} className="p-3" />
      </div>
    </main>
  );
}
