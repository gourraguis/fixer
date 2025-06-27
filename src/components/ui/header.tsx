import {
  Briefcase,
  Code,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
} from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Message } from '@/types';

interface HeaderProps {
  addMessage: (message: Omit<Message, 'id'>) => void;
}

export function Header({ addMessage }: HeaderProps) {
  return (
    <header className="flex items-center justify-between rounded-lg border bg-card p-4">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/pdp.jpg" alt="Abderrahmane Gourragui" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <h1 className="text-lg font-semibold">Abderrahmane Gourragui</h1>
      </div>
      <TooltipProvider>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
          <DropdownMenuItem
            onClick={() =>
              addMessage({
                text: 'Tell me about your projects.',
                variant: 'sent',
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
              <Code className="mr-2 h-4 w-4" />
              <span>Source Code</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold">
            Connect
          </DropdownMenuLabel>
          <div className="flex items-center justify-center gap-x-4 px-2 py-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://github.com/gourraguis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <Github className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitHub</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://www.linkedin.com/in/gourraguis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>LinkedIn</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <a href="mailto:work@gourragui.com" className="p-2">
                  <Mail className="h-5 w-5" />
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </TooltipProvider>
    </header>
  );
}
