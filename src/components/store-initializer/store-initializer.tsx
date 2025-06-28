'use client';

import { useEffect, useRef } from 'react';
import { useChatStore } from '@/stores/chat-store';

export function StoreInitializer() {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      useChatStore.getState().hydrate();
      initialized.current = true;
    }
  }, []);

  return null;
}
