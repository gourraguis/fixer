'use client';

import { ChatInput } from '@/components/chat/chat-input';
import { Header } from '@/components/chat/header/header';
import { MobileMenu } from '@/components/chat/mobile-menu';
import { MessageList } from '@/components/chat/messagelist/messagelist';
import { Overlay } from '@/components/ui/overlay';
import { StarfieldBackground } from '@/components/ui/starfield-background';
import { useUiStore } from '@/stores/ui-store';

export default function Home() {
  const { isMenuOpen, closeMenu } = useUiStore();

  return (
    <main className="flex h-screen flex-col bg-background">
      <Overlay isOpen={isMenuOpen} onClose={closeMenu} />
      <div className="flex h-full w-full flex-col">
        <Header>
          <MobileMenu />
        </Header>
        <div className="relative flex flex-1 flex-col">
          <StarfieldBackground />
          <MessageList className="z-10 flex-1 p-4" />
          <ChatInput className="z-10 p-3" />
        </div>
      </div>
    </main>
  );
}
