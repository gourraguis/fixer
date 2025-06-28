/**
 * A utility for safely interacting with localStorage, which is only available in the browser.
 */

export enum LocalStorageKeys {
  CONVERSATION_ID = 'gourragui-chat-conversation-id',
  MESSAGES = 'gourragui-chat-messages',
  SUGGESTIONS = 'gourragui-chat-suggestions',
}

/**
 * Retrieves an item from localStorage and parses it as JSON.
 * Returns a default value if the item doesn't exist or if running on the server.
 * @param key The key of the item to retrieve from localStorage.
 * @param defaultValue The default value to return if the item is not found.
 * @returns The parsed item from localStorage or the default value.
 */
export const getLocalStorageItem = <T>(key: LocalStorageKeys, defaultValue: T): T => {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  const storedValue = localStorage.getItem(key);
  if (storedValue === null) {
    return defaultValue;
  }

  try {
    return JSON.parse(storedValue) as T;
  } catch (e) {
    console.error(`Failed to parse localStorage item "${key}":`, e);
    return defaultValue;
  }
};

/**
 * Saves an item to localStorage after converting it to a JSON string.
 * Does nothing if running on the server.
 * @param key The key under which to store the item in localStorage.
 * @param value The value to store (will be stringified).
 */
export const setLocalStorageItem = <T>(key: LocalStorageKeys, value: T): void => {
  if (typeof window === 'undefined') {
    console.warn(
      `Attempted to set localStorage item "${key}" on the server. This operation will be ignored.`
    );
    return;
  }

  try {
    const stringifiedValue = JSON.stringify(value);
    localStorage.setItem(key, stringifiedValue);
  } catch (e) {
    console.error(`Failed to save item "${key}" to localStorage:`, e);
  }
};

/**
 * Removes all application-specific keys from localStorage.
 */
export const clearLocalStorage = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  for (const key of Object.values(LocalStorageKeys)) {
    localStorage.removeItem(key);
  }
};
