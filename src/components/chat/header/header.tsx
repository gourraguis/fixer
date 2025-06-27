import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import styles from './header.module.css';

export function Header({ children }: { children: React.ReactNode }) {
  return (
    <header
      className={`flex items-center justify-between bg-primary p-3 text-primary-foreground ${styles.header}`}
    >
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage src="/pdp.jpg" alt="Abderrahmane Gourragui" />
          <AvatarFallback>AG</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">Abderrahmane Gourragui</h1>
          <p className="text-xs text-primary-foreground/80">
            AI-Powered Portfolio
          </p>
        </div>
      </div>
      {children}
    </header>
  );
}
