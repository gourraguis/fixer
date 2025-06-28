'use client';

import { useEffect, useState } from 'react';

import { LOADING_TIPS } from '@/constants/tips';
import { cn } from '@/lib/utils';
import styles from './loading-scanner.module.css';

export function LoadingScanner({ className }: { className?: string }) {
  const [currentTip, setCurrentTip] = useState('');

  useEffect(() => {
    // Set the initial tip randomly
    setCurrentTip(LOADING_TIPS[Math.floor(Math.random() * LOADING_TIPS.length)]);

    const interval = setInterval(() => {
      setCurrentTip(
        LOADING_TIPS[Math.floor(Math.random() * LOADING_TIPS.length)],
      );
    }, 4000); // Change tip every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.scanner} />
      <p key={currentTip} className={styles.tipText}>
        {currentTip}
      </p>
    </div>
  );
}
