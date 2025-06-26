**User Story:** As a user, I want to see a mobile-first chat interface on the homepage so that I can view a conversation.

**Technical Requirements:**
*   The implementation will modify the main page file at `src/app/page.tsx`.
*   All default Next.js boilerplate content must be removed from the `Home` page component.
*   Import and render the `MessageList` component (from `tickets/3_create_messagelist_component.md`).
*   The page layout must be styled to be full-screen, with the `MessageList` component filling the viewport.
*   The background color of the page should be appropriate for a chat application.

**Acceptance Criteria:**
-   Given a user navigates to the application's root URL (`/`).
-   When the page loads.
-   Then the entire viewport is filled by the chat interface.
-   And the `MessageList` component with its two static messages is displayed.
-   And no default Next.js content is visible.

**Story Points:** 1
*   **Justification:** This task involves editing a single file to replace its content with an existing component. The complexity is low.
