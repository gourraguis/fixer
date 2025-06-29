import React from 'react';

export function useAutoResizeTextarea(
  value: string,
  ref: React.RefObject<HTMLTextAreaElement>,
) {
  React.useEffect(() => {
    if (ref.current) {
      ref.current.style.height = 'auto';
      ref.current.style.height = `${ref.current.scrollHeight}px`;
    }
  }, [value, ref]);
}
