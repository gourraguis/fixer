# TICKET-1: Create `useMessages` Hook for State Management

**User Story:** As a developer, I want a `useMessages` custom hook to manage the state of the chat message list, so that I can centralize message logic and reuse it across components.

**Technical Requirements:**
- Create a new file `src/hooks/use-messages.ts`.
- The hook should be named `useMessages`.
- It should manage an array of messages. Each message object should conform to a `Message` type with properties like `id` (string, unique), `text` (string), and `variant` ('sent' | 'received').
- The hook should expose the current list of messages.
- The hook should expose a function `addMessage(message: Omit<Message, 'id'>)` to add a new message to the list. This function should handle generating a unique ID.
- Initialize the hook with a default welcome message: `{ text: "Hello! How can I help you today?", variant: "received" }`.

**Acceptance Criteria:**
- GIVEN the `useMessages` hook is used in a component, WHEN the component renders, THEN the `messages` array returned by the hook contains the initial welcome message.
- GIVEN the `useMessages` hook is used, WHEN `addMessage` is called with a new message, THEN the `messages` array is updated to include the new message with a unique ID.

**Story Points:** 3
**Justification:** This involves creating a new hook, defining data structures, and implementing state management logic, which is foundational but not overly complex.
