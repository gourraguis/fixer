import { MessageList } from '@/components/ui/messagelist';

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center bg-background p-4">
      <div className="flex h-full w-full max-w-2xl flex-col">
        <MessageList className="flex-1" />
      </div>
    </main>
  );
}
