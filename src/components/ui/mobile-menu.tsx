import {
  Briefcase,
  Code,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Message } from '@/types';

interface MobileMenuProps {
  addMessage: (message: Omit<Message, 'id'>) => void;
}

export function MobileMenu({ addMessage }: MobileMenuProps) {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-48 border-0 bg-primary text-primary-foreground [&_svg]:stroke-primary-foreground"
        >
          <DropdownMenuItem
            className="cursor-pointer focus:bg-primary-foreground/10 focus:text-primary-foreground"
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
          <DropdownMenuItem
            asChild
            className="cursor-pointer focus:bg-primary-foreground/10 focus:text-primary-foreground"
          >
            <a href="/gourragui_cv.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              <span>Download Resume</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem
            asChild
            className="cursor-pointer focus:bg-primary-foreground/10 focus:text-primary-foreground"
          >
            <a
              href="https://github.com/gourraguis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Code className="mr-2 h-4 w-4" />
              <span>Source Code</span>
            </a>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-primary-foreground/20" />
          <DropdownMenuLabel>
            <p className="text-center text-sm font-semibold">Connect</p>
            <div className="mt-1 flex items-center justify-center gap-x-4">
              <a
                href="https://github.com/gourraguis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-opacity hover:opacity-75"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/gourraguis/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 transition-opacity hover:opacity-75"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:work@gourragui.com"
                className="p-2 transition-opacity hover:opacity-75"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </DropdownMenuLabel>
        </DropdownMenuContent>
      </DropdownMenu>
  );
}
