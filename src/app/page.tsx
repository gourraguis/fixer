import { MessageList } from '@/components/ui/messagelist';

export default function Home() {
  return (
    <main className="flex h-screen flex-col bg-background">
      <MessageList className="flex-1" />
    </main>
  );
}
