'use client';

import { ChatInterface } from '@/components/chat/chat-interface/chat-interface';
import { StoreInitializer } from '@/components/store-initializer/store-initializer';
import { Overlay } from '@/components/ui/overlay';
import { useUiStore } from '@/stores/ui-store';

export default function Home() {
  const { isMenuOpen, closeMenu } = useUiStore();

  return (
    <>
      <StoreInitializer />
      <main className="flex h-screen flex-col bg-background">
        <Overlay isOpen={isMenuOpen} onClose={closeMenu} />
        <ChatInterface />
      </main>
    </>
  );
}
