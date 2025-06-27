'use client';

import { ChatInput } from '@/components/chat/chat-input';
import { Header } from '@/components/chat/header';
import { MessageList } from '@/components/chat/messagelist';
import { Overlay } from '@/components/ui/overlay';
import { useUiStore } from '@/stores/ui-store';

export default function Home() {
  const { isMenuOpen, closeMenu } = useUiStore();

  return (
    <main className="flex h-screen flex-col bg-background">
      <Overlay isOpen={isMenuOpen} onClose={closeMenu} />
      <div className="flex h-full w-full flex-col">
        <Header />
        <div className="flex flex-1 flex-col bg-zinc-100 dark:bg-zinc-900">
          <MessageList className="flex-1 p-4" />
          <ChatInput className="p-3" />
        </div>
      </div>
    </main>
  );
}
