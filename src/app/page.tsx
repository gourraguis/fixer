'use client';

import { ChatInput } from '@/components/ui/chat-input';
import { MessageList } from '@/components/ui/messagelist';
import { useMessages } from '@/hooks/use-messages';

export default function Home() {
  const { messages, addMessage } = useMessages();

  return (
    <main className="flex h-screen flex-col items-center bg-background p-4">
      <div className="flex h-full w-full max-w-2xl flex-col">
        <MessageList messages={messages} className="flex-1" />
        <ChatInput addMessage={addMessage} className="mt-4" />
      </div>
    </main>
  );
}
