import { Briefcase, Download, Github, Linkedin, Menu } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Message } from '@/types';

interface HeaderProps {
  addMessage: (message: Omit<Message, 'id'>) => void;
}

export function Header({ addMessage }: HeaderProps) {
  return (
    <header className="flex items-center justify-between pb-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/pdp.jpg" alt="Abderrahmane Gourragui" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-semibold">Abderrahmane Gourragui</h1>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            onClick={() =>
              addMessage({
                role: 'user',
                content: 'Tell me about your projects.',
              })
            }
          >
            <Briefcase className="mr-2 h-4 w-4" />
            <span>View Projects</span>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/gourragui_cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              href="https://github.com/gourraguis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              <span>Source Code</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <div className="flex items-center justify-around px-2 py-1">
            <a
              href="https://github.com/gourraguis"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gourraguis/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
