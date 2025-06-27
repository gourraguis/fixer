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
  const menuItems = [
    {
      Icon: Briefcase,
      label: 'View Projects',
      onClick: () =>
        addMessage({
          text: 'Tell me about your projects.',
          variant: 'sent',
        }),
    },
    {
      Icon: Download,
      label: 'Download Resume',
      href: '/gourragui_cv.pdf',
      download: true,
    },
    {
      Icon: Code,
      label: 'Source Code',
      href: 'https://github.com/gourraguis',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
  ];

  const socialLinks = [
    {
      Icon: Github,
      href: 'https://github.com/gourraguis',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      Icon: Linkedin,
      href: 'https://www.linkedin.com/in/gourraguis/',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      Icon: Mail,
      href: 'mailto:work@gourragui.com',
    },
  ];

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
        {menuItems.map(
          ({ Icon, label, href, download, target, rel, onClick }, index) =>
            href ? (
              <DropdownMenuItem
                key={index}
                asChild
                className="cursor-pointer focus:bg-primary-foreground/10 focus:text-primary-foreground"
              >
                <a href={href} download={download} target={target} rel={rel}>
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{label}</span>
                </a>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem
                key={index}
                className="cursor-pointer focus:bg-primary-foreground/10 focus:text-primary-foreground"
                onClick={onClick}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{label}</span>
              </DropdownMenuItem>
            ),
        )}
        <DropdownMenuSeparator className="bg-primary-foreground/20" />
        <DropdownMenuLabel>
          <p className="text-center text-sm font-semibold">Connect</p>
          <div className="mt-1 flex items-center justify-center gap-x-4">
            {socialLinks.map(({ Icon, ...linkProps }, index) => (
              <a
                key={index}
                {...linkProps}
                className="p-2 transition-opacity hover:opacity-75"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
