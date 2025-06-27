'use client';

import { ChatInput } from '@/components/ui/chat-input';
import { Header } from '@/components/ui/header';
import { MessageList } from '@/components/ui/messagelist';
import { useMessages } from '@/hooks/use-messages';

export default function Home() {
  const { messages, addMessage, isLoading } = useMessages();

  return (
    <main className="flex h-screen flex-col items-center bg-background p-4">
      <div className="flex h-full w-full max-w-2xl flex-col">
        <Header />
        <MessageList messages={messages} isLoading={isLoading} className="flex-1" />
        <ChatInput
          addMessage={addMessage}
          isLoading={isLoading}
          className="mt-4"
        />
      </div>
    </main>
  );
}
