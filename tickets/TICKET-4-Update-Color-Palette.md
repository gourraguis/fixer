# User Story
As a user, I want to see a more vibrant and modern color scheme, so that the application feels more bold and confident.

# Technical Requirements
- Update the CSS variables in `src/app/globals.css` for both `:root` (light mode) and `.dark` (dark mode) selectors.
- Use the following `oklch` values:
  - **Light Mode:**
    - `--background`: `oklch(1 0 0)`
    - `--foreground`: `oklch(0.09 0.02 240)`
    - `--card`: `oklch(0.97 0.01 240)`
    - `--card-foreground`: `oklch(0.09 0.02 240)`
    - `--popover`: `oklch(0.97 0.01 240)`
    - `--popover-foreground`: `oklch(0.09 0.02 240)`
    - `--primary`: `oklch(0.55 0.15 260)`
    - `--primary-foreground`: `oklch(0.99 0.01 260)`
    - `--secondary`: `oklch(0.92 0.02 240)`
    - `--secondary-foreground`: `oklch(0.09 0.02 240)`
    - `--muted`: `oklch(0.92 0.02 240)`
    - `--muted-foreground`: `oklch(0.4 0.03 240)`
    - `--accent`: `oklch(0.92 0.02 240)`
    - `--accent-foreground`: `oklch(0.09 0.02 240)`
    - `--border`: `oklch(0.88 0.03 240)`
    - `--input`: `oklch(0.88 0.03 240)`
    - `--ring`: `oklch(0.55 0.15 260)`
  - **Dark Mode:**
    - `--background`: `oklch(0.09 0.02 240)`
    - `--foreground`: `oklch(0.97 0.01 240)`
    - `--card`: `oklch(0.12 0.025 240)`
    - `--card-foreground`: `oklch(0.97 0.01 240)`
    - `--popover`: `oklch(0.12 0.025 240)`
    - `--popover-foreground`: `oklch(0.97 0.01 240)`
    - `--primary`: `oklch(0.55 0.15 260)`
    - `--primary-foreground`: `oklch(0.99 0.01 260)`
    - `--secondary`: `oklch(0.2 0.03 240)`
    - `--secondary-foreground`: `oklch(0.97 0.01 240)`
    - `--muted`: `oklch(0.2 0.03 240)`
    - `--muted-foreground`: `oklch(0.6 0.02 240)`
    - `--accent`: `oklch(0.2 0.03 240)`
    - `--accent-foreground`: `oklch(0.97 0.01 240)`
    - `--border`: `oklch(0.2 0.03 240)`
    - `--input`: `oklch(0.2 0.03 240)`
    - `--ring`: `oklch(0.55 0.15 260)`

# Acceptance Criteria
- GIVEN the application is in light mode, WHEN the page is viewed, THEN the new light mode color palette is applied correctly to all elements.
- GIVEN the application is in dark mode, WHEN the page is viewed, THEN the new dark mode color palette is applied correctly to all elements.
- GIVEN the new palette is applied, WHEN a message is sent by the user, THEN its background color uses the new primary color (`oklch(0.55 0.15 260)`).

# Story Points
2
- **Justification:** The task involves updating a significant number of CSS variables across both light and dark themes in a single file. While not complex conceptually, it requires precision to ensure all values are correctly transcribed.
