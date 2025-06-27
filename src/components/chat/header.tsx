import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Message } from '@/types';

import { MobileMenu } from './mobile-menu';

interface HeaderProps {
  addMessage: (message: Omit<Message, 'id'>) => void;
}

export function Header({ addMessage }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-primary p-3 text-primary-foreground">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/pdp.jpg" alt="Abderrahmane Gourragui" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-bold">Abderrahmane Gourragui</h1>
      </div>
      <MobileMenu addMessage={addMessage} />
    </header>
  );
}
