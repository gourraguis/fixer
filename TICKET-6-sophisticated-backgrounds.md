# Ticket: Implement Sophisticated Backgrounds for Light and Dark Themes

**User Story:**
As a recruiter visiting the portfolio, I want to see a sophisticated and professional background, so that the website's design reflects the high quality and attention to detail of the senior engineer.

**Technical Requirements:**
*   Implement new page backgrounds for both light and dark themes using CSS. The changes will likely be applied to the `bg-background` class in `src/app/globals.css` or the main layout element in `src/app/page.tsx`.
*   The background must be subtle and not interfere with the readability of text or the visibility of UI components.
*   **Light Theme:**
    *   Implement a subtle, low-contrast, repeating geometric pattern (e.g., faint chevrons or hexagons).
    *   The pattern's color should be only slightly different from the base background color to maintain a clean and professional look.
*   **Dark Theme:**
    *   Implement a "digital blueprint" or "subtle noise" texture.
    *   This could be a faint grid pattern or a fine-grained noise texture.
    *   The pattern's color should be derived from the theme's `muted` color palette to ensure design consistency.

**Acceptance Criteria:**
*   **Given** the application is viewed in light mode, **When** the main page is loaded, **Then** a subtle geometric background pattern is visible.
*   **Given** the application is viewed in dark mode, **When** the main page is loaded, **Then** a subtle "digital blueprint" or "noise" background is visible.
*   **Given** either theme, **When** viewing the page, **Then** the background pattern does not reduce the readability of chat messages or other UI elements.
*   **Given** either theme, **When** the browser window is resized, **Then** the background pattern scales or tiles correctly without visual artifacts.

**Story Points:** 3

**Justification:** The task involves implementing custom CSS backgrounds for both light and dark themes. This requires careful design and implementation to ensure the patterns are subtle, responsive, and compatible with the existing theme structure. The complexity is moderate as it goes beyond a simple color change but does not involve application logic.
