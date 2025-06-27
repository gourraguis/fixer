'use client';

import { cn } from '@/lib/utils';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Overlay({ isOpen, onClose }: OverlayProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-40 bg-black/50 transition-opacity',
        isOpen ? 'opacity-100' : 'pointer-events-none opacity-0',
      )}
      onClick={onClose}
    />
  );
}
