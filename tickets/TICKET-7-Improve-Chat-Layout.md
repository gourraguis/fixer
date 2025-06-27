# User Story
As a user, I want the chat interface to feel like a native messaging app (e.g., WhatsApp, Telegram), so that the experience is more immersive and familiar.

# Technical Requirements
1.  **Implement Edge-to-Edge Layout:**
    -   The main chat container should span the full width of the viewport, removing any horizontal padding or max-width constraints that create a boxed-in feel.

2.  **Integrate Header and Input Bar:**
    -   Restyle the header and chat input components to function as solid, full-width bars at the top and bottom of the screen, respectively.
    -   Remove card-like styles such as prominent borders and rounded corners that separate them from the main content area.

3.  **Create a Distinct Chat Background:**
    -   Apply a unique background color or a subtle pattern to the message list area to visually distinguish the conversation from the header and input bar, focusing user attention on the chat content.

# Acceptance Criteria
-   GIVEN the application is viewed, WHEN the chat page is loaded, THEN the header, message list, and chat input collectively occupy the full width of the viewport.
-   GIVEN the chat interface is displayed, WHEN inspecting the UI, THEN the header and chat input appear as solid horizontal bars framing the message list, not as separate cards.
-   GIVEN the chat interface is displayed, WHEN viewing the message list, THEN it has a background that is visually distinct from the rest of the page.
