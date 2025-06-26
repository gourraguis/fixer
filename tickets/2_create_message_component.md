**User Story:** As a developer, I want a reusable `Message` component so that I can display individual chat messages consistently.

**Technical Requirements:**
*   Create a new React component named `Message`.
*   The component should be created in a new file at `src/components/ui/message.tsx`.
*   The component must accept the following props:
    *   `text`: `string` - The content of the message.
    *   `variant`: `'sent' | 'received'` - To control the styling.
*   Use Tailwind CSS classes for styling, following the conventions established by shadcn/ui.
*   The 'sent' variant should be right-aligned with a distinct background color.
*   The 'received' variant should be left-aligned with a different background color.

**Acceptance Criteria:**
-   Given the `Message` component is rendered with `variant='sent'`.
-   When viewed, the message bubble is right-aligned.
-   Given the `Message` component is rendered with `variant='received'`.
-   When viewed, the message bubble is left-aligned.
-   The component correctly displays the `text` prop.

**Story Points:** 2
*   **Justification:** This involves creating a new, styled component from scratch with variants and props. It is self-contained but requires careful implementation of styling logic.
