import { Message } from '@/components/ui/message';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-4 p-4">
        <Message variant="sent" text="This is a sent message." />
        <Message variant="received" text="This is a received message." />
      </div>
    </main>
  );
}
