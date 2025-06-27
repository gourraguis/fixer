# User Story
As a user, I want the chat interface to feel like a native messaging app (e.g., WhatsApp, Telegram), so that the experience is more immersive and familiar.

# Technical Requirements
1.  **Implement Edge-to-Edge Layout:**
    -   In `src/app/page.tsx`, modify the main container `div` to span the full viewport width by removing the `max-w-2xl` class. The `p-4` class on the `main` element should also be removed to allow child components to be truly edge-to-edge.

2.  **Integrate Header and Input Bar:**
    -   In `src/components/ui/header.tsx`, update the `<header>` element to function as a full-width bar. Remove the `rounded-lg` and `border` classes. The component should manage its own horizontal padding.
    -   The `ChatInput` component in `src/app/page.tsx` should also be presented as a full-width bar, managing its own internal padding.

3.  **Create a Distinct Chat Background:**
    -   In `src/app/page.tsx`, apply a distinct background to the `MessageList` component to separate it visually from the header and input bar. Use the class `bg-zinc-100 dark:bg-zinc-900` for this purpose.

# Acceptance Criteria
-   GIVEN the application is loaded, WHEN viewing the chat page, THEN the main content container spans the full width of the browser viewport.
-   GIVEN the chat interface is displayed, WHEN inspecting the header element, THEN it does not have `rounded-lg` or `border` CSS classes.
-   GIVEN the chat interface is displayed, WHEN viewing the message list, THEN it has a light gray background (`bg-zinc-100`) in light mode and a dark gray background (`bg-zinc-900`) in dark mode.

# Story Points
**2**

**Justification:** The task involves straightforward CSS class modifications in existing React components (`page.tsx`, `header.tsx`). The scope is limited to layout and styling adjustments with no changes to application logic, dependencies, or data structures. The complexity is low.
