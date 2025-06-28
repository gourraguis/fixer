'use client';

import { useChatStore } from '@/stores/chat-store';
import { Suggestion } from '@/types/suggestion';
import styles from './suggestions.module.css';

export function Suggestions() {
  const { suggestions, addMessage } = useChatStore();

  if (suggestions.length === 0) {
    return null;
  }

  const handleSuggestionClick = (suggestion: Suggestion) => {
    addMessage({
      text: suggestion.prompt,
      role: 'user',
    });
  };

  return (
    <div className={styles.suggestions}>
      {suggestions.map((suggestion, index) => (
        <button
          key={index}
          className={styles.suggestionCard}
          onClick={() => handleSuggestionClick(suggestion)}
        >
          <span className={styles.emoji}>{suggestion.emoji}</span>
          <span className={styles.title}>{suggestion.title}</span>
        </button>
      ))}
    </div>
  );
}
