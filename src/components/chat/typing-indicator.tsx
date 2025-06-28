import * as React from 'react';

import { cn } from '@/lib/utils';
import styles from './typing-indicator.module.css';

const TypingIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      {...props}
      ref={ref}
      role="status"
      aria-live="polite"
      className={cn(styles.typingIndicator, className)}
    >
      <span className="sr-only">AI is typing...</span>
      <div className={styles.bar} />
      <div className={styles.bar} />
      <div className={styles.bar} />
    </div>
  );
});
TypingIndicator.displayName = 'TypingIndicator';

export { TypingIndicator };
