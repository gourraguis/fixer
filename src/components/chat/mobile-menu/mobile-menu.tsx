'use client';

import {
  Code,
  Download,
  Github,
  LayoutGrid,
  Linkedin,
  Mail,
  Menu,
  Plus,
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
import { useChatStore } from '@/stores/chat-store';
import { useUiStore } from '@/stores/ui-store';
import { clearLocalStorage } from '@/utils/local-storage';
import styles from './mobile-menu.module.css';

export function MobileMenu() {
  const { isMenuOpen, toggleMenu } = useUiStore();
  const { reset } = useChatStore();

  const handleNewDiscussion = () => {
    clearLocalStorage();
    reset();
  };

  const menuItems = [
    {
      Icon: Download,
      label: 'Download Resume',
      href: '/gourragui_cv.pdf',
      download: true,
    },
    {
      Icon: LayoutGrid,
      label: 'Classic Portfolio',
      href: 'https://classic.gourragui.com',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      Icon: Code,
      label: 'Source Code',
      href: 'https://github.com/gourraguis/fixer',
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
    <DropdownMenu open={isMenuOpen} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className={styles.menuIcon}>
          <Menu className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className={`${styles.dropdown} z-50 w-56 text-primary-foreground [&_svg]:stroke-primary-foreground`}
      >
        <DropdownMenuItem
          asChild
          className={`cursor-pointer focus:text-primary-foreground ${styles.menuItem}`}
          onClick={handleNewDiscussion}
        >
          <a>
            <Plus className="mr-2 h-4 w-4" />
            <span>New Discussion</span>
          </a>
        </DropdownMenuItem>
        {menuItems.map(
          ({ Icon, label, href, download, target, rel }, index) =>
            (
              <DropdownMenuItem
                key={index}
                asChild
                className={`cursor-pointer focus:text-primary-foreground ${styles.menuItem}`}
              >
                <a href={href} download={download} target={target} rel={rel}>
                  <Icon className="mr-2 h-4 w-4" />
                  <span>{label}</span>
                </a>
              </DropdownMenuItem>
            )
        )}
        <DropdownMenuSeparator className={styles.separator} />
        <DropdownMenuLabel>
          <p className="text-center text-sm font-semibold">Connect</p>
          <div className="mt-2 flex items-center justify-center gap-x-6">
            {socialLinks.map(({ Icon, ...linkProps }, index) => (
              <a
                key={index}
                {...linkProps}
                className={`p-2 transition-opacity hover:opacity-75 ${styles.socialLink}`}
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
