'use client';

import { useChatStore } from '@/stores/chat-store';
import { Suggestions } from '../suggestions/suggestions';
import styles from './suggestions-container.module.css';

export function SuggestionsContainer() {
  const { suggestions } = useChatStore();

  return (
    <div className={styles.suggestionsContainer}>
      {suggestions.length > 0 && <Suggestions />}
    </div>
  );
}
