'use client';

import { ChatInput } from '@/components/chat/chat-input/chat-input';
import { Header } from '@/components/chat/header/header';
import { LoadingScanner } from '@/components/chat/loading-scanner/loading-scanner';
import { MessageList } from '@/components/chat/messagelist/messagelist';
import { MobileMenu } from '@/components/chat/mobile-menu/mobile-menu';
import { SuggestionsContainer } from '@/components/chat/suggestions-container/suggestions-container';
import { StarfieldBackground } from '@/components/ui/starfield-background';
import { useChatStore } from '@/stores/chat-store';

export function ChatInterface() {
  const { isLoading } = useChatStore();

  return (
    <div className="flex h-full w-full flex-col">
      <Header>
        <MobileMenu />
      </Header>
      <div className="relative flex flex-1 flex-col">
        <StarfieldBackground />
        <div className="z-10 flex-1 overflow-y-auto">
          <MessageList className="p-4" />
        </div>
        <SuggestionsContainer />
        {isLoading ? (
          <LoadingScanner className="z-10" />
        ) : (
          <ChatInput className="z-10 p-3" />
        )}
      </div>
    </div>
  );
}
