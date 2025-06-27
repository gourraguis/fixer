import { Menu } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="flex items-center justify-between pb-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/pdp.jpg" alt="Abderrahmane Gourragui" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-semibold">Abderrahmane Gourragui</h1>
      </div>
      <Button variant="ghost" size="icon">
        <Menu className="h-6 w-6" />
      </Button>
    </header>
  );
}
