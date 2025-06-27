import * as React from 'react';

import { cn } from '@/lib/utils';

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
      className={cn('flex items-center space-x-1', className)}
    >
      <span className="sr-only">AI is typing...</span>
      <div className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
      <div className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
      <div className="h-2 w-2 animate-pulse rounded-full bg-muted-foreground" />
    </div>
  );
});
TypingIndicator.displayName = 'TypingIndicator';

export { TypingIndicator };
