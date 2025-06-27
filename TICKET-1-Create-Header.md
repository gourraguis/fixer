# AI Product Manager: JIRA Ticket

**User Story:**
As a visitor, I want to see a header with the developer's picture and name, so I can quickly identify who the portfolio belongs to.

**Technical Requirements:**
*   Create a new component at `src/components/ui/header.tsx`.
*   The header must display:
    *   A profile picture using the `Avatar` component. The image source will be `/pdp.jpg`.
    *   The developer's name: "Abderrahmane Gourragui".
*   The header must include a burger menu button (`Menu` icon from `lucide-react`) that will later be used to open a dropdown. For now, it can be a placeholder button.
*   Integrate the new `<Header />` component at the top of the main `div` in `src/app/page.tsx`.

**Acceptance Criteria:**
*   **Given** the application is loaded, **when** the page is viewed, **then** the header is displayed at the top.
*   **Given** the header is visible, **then** it shows the developer's profile picture and name.
*   **Given** the header is visible, **then** it shows a burger menu icon button.

**Story Points:** 2
*   **Justification:** This task involves creating a new component, integrating it, and adding basic static elements. It requires using the `Avatar` component and an icon, which is low complexity.
