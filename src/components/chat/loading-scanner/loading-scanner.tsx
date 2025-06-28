'use client';

import { cn } from '@/lib/utils';
import styles from './loading-scanner.module.css';

export function LoadingScanner({ className }: { className?: string }) {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.scanner} />
    </div>
  );
}
