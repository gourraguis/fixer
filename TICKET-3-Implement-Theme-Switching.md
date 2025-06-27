# AI Product Manager: JIRA Ticket

**User Story:**
As a user, I want to switch between light and dark themes, so I can use the application comfortably in different lighting conditions.

**Technical Requirements:**
*   Implement theme switching functionality. A library like `next-themes` is recommended.
*   Create a theme provider and wrap the root layout in `src/app/layout.tsx` with it.
*   Add a theme switcher button to the dropdown menu in `src/components/ui/header.tsx`.
*   The button should toggle the theme between 'light' and 'dark'.
*   The button should display a `Sun` icon when the current theme is dark (to switch to light) and a `Moon` icon when the current theme is light (to switch to dark).
*   Ensure Tailwind CSS dark mode variant (`dark:`) works correctly with the theme provider.

**Acceptance Criteria:**
*   **Given** the dropdown menu is open, **then** a theme switcher button with an icon is visible.
*   **Given** the application is in light mode, **when** the user clicks the theme switch button, **then** the application switches to dark mode.
*   **Given** the application is in dark mode, **when** the user clicks the theme switch button, **then** the application switches to light mode.
*   **Given** the theme is changed, **when** the page is reloaded, **then** the selected theme persists.
*   **Given** the theme is light, **when** the dropdown menu is opened, **then** the theme switch button shows a `Moon` icon.
*   **Given** the theme is dark, **when** the dropdown menu is opened, **then** the theme switch button shows a `Sun` icon.

**Story Points:** 3
*   **Justification:** This task involves adding a new dependency (e.g., `next-themes`), configuring a theme provider, modifying the root layout, and adding a new button with toggle logic to the header component. It affects the entire application's styling and requires careful integration.
