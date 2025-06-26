**Task:** Update All Theme Colors for a Cohesive Look

**Description:**
The current theme has a custom violet primary color, but the other UI colors (background, cards, inputs, etc.) are still based on the default 'Slate' theme from the `shadcn/ui` initialization. This creates a visual disconnect. This task is to update all color variables in `src/app/globals.css` to create a cohesive, violet-based dark theme.

**Execution Steps:**
1.  **Verify & Apply Prerequisite:** This task depends on the primary color being set as per `tickets/1_setup_shadcn.md`. The developer must first verify that the following values for `--primary` and `--primary-foreground` are present in `src/app/globals.css` inside both the `:root` and `.dark` selectors. If they are missing or incorrect, they must be added or updated before proceeding.
    ```css
    --primary: 0.61 0.21 289;
    --primary-foreground: 0.99 0.01 257;
    ```
2.  Define a full color palette in oklch format that complements this primary color. The new palette should provide values for all theme colors: `background`, `foreground`, `card`, `popover`, `secondary`, `muted`, `accent`, `destructive`, `border`, `input`, and `ring`.
3.  Replace the existing color variables in `src/app/globals.css` for both the light (`:root`) and dark (`.dark`) themes with the new, cohesive palette. The goal is to create a modern, dark-first interface.

    **Example of new dark theme variables (illustrative):**
    ```css
    .dark {
      --background: 0.15 0.02 265; /* Dark violet-blue */
      --foreground: 0.95 0.01 265; /* Light violet-gray */
      --muted: 0.25 0.03 270;
      --muted-foreground: 0.75 0.02 270;
      --popover: 0.12 0.02 265;
      --popover-foreground: 0.95 0.01 265;
      --card: 0.20 0.03 268;
      --card-foreground: 0.95 0.01 265;
      --border: 0.30 0.03 270;
      --input: 0.30 0.03 270;
      --primary: 0.61 0.21 289;
      --primary-foreground: 0.99 0.01 257;
      --secondary: 0.45 0.05 275;
      --secondary-foreground: 0.98 0.01 275;
      --accent: 0.40 0.04 272;
      --accent-foreground: 0.98 0.01 272;
      --destructive: 0.55 0.18 15;
      --destructive-foreground: 0.98 0.01 15;
      --ring: 0.61 0.21 289;
    }
    ```
    *(Note: The light theme in `:root` should also be updated for consistency, even if the primary focus is the dark theme.)*

**Acceptance Criteria:**
-   All color variables in `src/app/globals.css` (for both `:root` and `.dark`) are updated to a new, cohesive palette.
-   The new color scheme is based on the established violet primary color.
-   The application's UI consistently uses the new theme colors across all components.
-   The visual appearance is professional and harmonious, with no lingering 'Slate' colors.

**Story Points:** 2
*   **Justification:** This task involves design choices (selecting a color palette) and careful replacement of multiple CSS variables. While not complex in terms of code logic, it requires attention to detail to ensure a consistent and aesthetically pleasing result across the entire UI.
