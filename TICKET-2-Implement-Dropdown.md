# AI Product Manager: JIRA Ticket

**User Story:**
As a visitor, I want to access key actions and links from a menu in the header, so I can easily navigate to important resources like projects, resume, and social profiles.

**Technical Requirements:**
*   Modify the header component at `src/components/ui/header.tsx`.
*   Implement a `DropdownMenu` from `shadcn/ui` that is toggled by the burger menu button.
*   The dropdown menu must contain the following items:
    *   **View Projects:** A button that, when clicked, calls the `addMessage` function with the message `{ role: 'user', content: 'Tell me about your projects.' }`.
    *   **Download Resume:** An `<a>` tag pointing to `/gourragui_cv.pdf`. It should have a `Download` icon from `lucide-react`.
    *   **Source Code:** An `<a>` tag linking to `https://github.com/gourraguis`, opening in a new tab. It should have a `Github` icon.
    *   **Socials:** A group of icon-only links opening in a new tab:
        *   **GitHub:** `https://github.com/gourraguis` (using the `Github` icon).
        *   **LinkedIn:** `https://www.linkedin.com/in/gourraguis/` (using the `Linkedin` icon).
    *   **Theme Switch:** A button to toggle between light and dark themes. The UI element should be present, but the implementation logic is left to the developer. Use `Sun` and `Moon` icons to indicate the current/next theme.

**Acceptance Criteria:**
*   **Given** the header is visible, **when** the user clicks the burger menu icon, **then** a dropdown menu appears.
*   **Given** the menu is open, **when** the "View Projects" item is clicked, **then** a user message "Tell me about your projects." is added to the chat.
*   **Given** the menu is open, **when** the "Download Resume" link is clicked, **then** the browser initiates a download for the file at `/gourragui_cv.pdf`.
*   **Given** the menu is open, **when** the "Source Code" or GitHub social icon is clicked, **then** the corresponding GitHub URL opens in a new browser tab.
*   **Given** the menu is open, **when** the LinkedIn icon is clicked, **then** the LinkedIn profile opens in a new browser tab.
*   **Given** the menu is open, **then** a theme switcher button with an icon is visible.

**Story Points:** 3
*   **Justification:** This task builds on the existing header, adding interactivity with a `DropdownMenu`. It involves integrating with the `addMessage` hook, handling external links, and setting up the UI for theme switching. The complexity is moderate due to the various interactive elements.
