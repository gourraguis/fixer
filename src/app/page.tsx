import { MessageList } from '@/components/ui/messagelist';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md p-4">
        <MessageList />
      </div>
    </main>
  );
}
