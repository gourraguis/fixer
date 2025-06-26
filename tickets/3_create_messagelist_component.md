**User Story:** As a developer, I want a `MessageList` component so that I can display a conversation thread.

**Technical Requirements:**
*   Create a new React component named `MessageList`.
*   The component should be created in a new file at `src/components/ui/messagelist.tsx`.
*   The component must import and use the `Message` component (from `tickets/2_create_message_component.md`).
*   It should render a hardcoded list of exactly two `Message` components:
    1.  One message with `variant='received'` and static text (e.g., "Hello! How can I help you today?").
    2.  One message with `variant='sent'` and static text (e.g., "I'd like to know more about your services.").
*   The component should provide the vertical layout for the messages (e.g., a flex column with spacing).

**Acceptance Criteria:**
-   The `MessageList` component renders without errors.
-   The component displays one "received" message bubble.
-   The component displays one "sent" message bubble.

**Story Points:** 1
*   **Justification:** This is a simple composition task, combining an existing component into a new static layout. It contains no complex logic.
