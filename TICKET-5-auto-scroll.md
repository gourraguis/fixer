# TICKET-5: Implement Auto-Scrolling in Message List

**User Story:** As a user, I want the chat to automatically scroll to the newest message, so that I can always see the latest reply without having to scroll manually.

**Technical Requirements:**
- In `src/components/ui/messagelist.tsx`, implement logic to automatically scroll the message list to the bottom.
- The scrolling behavior should be triggered whenever the `messages` prop changes.
- A `useEffect` hook watching the `messages` array is the recommended approach.
- Use a `useRef` to get a reference to the scrollable element or the last message to scroll it into view.

**Acceptance Criteria:**
- GIVEN the message list is longer than the viewport, WHEN a new message is added, THEN the list automatically scrolls down to make the new message fully visible.
- GIVEN the user has manually scrolled up to view older messages, WHEN a new message arrives, THEN the list still scrolls to the bottom to show the latest message.

**Story Points:** 2
**Justification:** This is a standard UX feature that involves using common React hooks (`useEffect`, `useRef`) within a single component. The complexity is low.
