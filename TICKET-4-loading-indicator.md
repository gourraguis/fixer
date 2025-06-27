# TICKET-4: Implement Loading State UI in Chat

**User Story:** As a user, I want to see a visual indicator that the AI is "typing" and be prevented from sending another message, so that I know my message is being processed.

**Technical Requirements:**
- Create a new component, `TypingIndicator`, that displays a visual animation (e.g., three pulsing dots).
- In `src/app/page.tsx`, get the `isLoading` state from the `useMessages` hook.
- In `MessageList`, render the `TypingIndicator` component at the end of the message list only when `isLoading` is `true`.
- In `ChatInput`, the send button and text input should be disabled when `isLoading` is `true`.
- Pass the `isLoading` state from `page.tsx` down to `ChatInput` and `MessageList` as a prop.

**Acceptance Criteria:**
- GIVEN a message has been sent and the app is waiting for a reply, WHEN `isLoading` is `true`, THEN the `TypingIndicator` is visible in the `MessageList`.
- GIVEN `isLoading` is `true`, WHEN the user views the `ChatInput`, THEN the input field and send button are disabled.
- GIVEN the API response is received and `isLoading` becomes `false`, WHEN the UI updates, THEN the `TypingIndicator` is no longer visible and the `ChatInput` is re-enabled.

**Story Points:** 3
**Justification:** This involves creating one new component and modifying two existing components (`MessageList`, `ChatInput`) to react to a new prop. The logic is straightforward conditional rendering.
