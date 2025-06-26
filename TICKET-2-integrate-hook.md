# TICKET-2: Integrate `useMessages` Hook with UI Components

**User Story:** As a developer, I want to integrate the `useMessages` hook with the `MessageList` and `ChatInput` components, so that the UI reflects the current message state and can add new messages.

**Technical Requirements:**
- Refactor `src/app/page.tsx` to use the `useMessages` hook at a level where both `MessageList` and `ChatInput` can access its state and functions.
- Pass the `messages` array from the hook to the `MessageList` component.
- Modify `src/components/ui/messagelist.tsx` to accept a `messages` prop (an array of message objects) and render them dynamically instead of the current hardcoded messages.
- Pass the `addMessage` function from the hook to the `ChatInput` component.
- Modify `src/components/ui/chat-input.tsx` to call `addMessage` when the user submits a new message. The new message should have the `variant` 'sent'.

**Acceptance Criteria:**
- GIVEN the application is loaded, WHEN the `MessageList` component renders, THEN it displays the initial message from the `useMessages` hook.
- GIVEN a user types a message into the `ChatInput` and submits it, WHEN the form is submitted, THEN the new message appears in the `MessageList` with the 'sent' variant.

**Story Points:** 5
**Justification:** This involves refactoring multiple components (`page.tsx`, `messagelist.tsx`, `chat-input.tsx`) and wiring them together with the new hook. This requires careful state propagation and has several points of interaction.
