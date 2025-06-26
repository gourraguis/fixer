**Task:** Initialize shadcn/ui and configure a bold theme

**Description:**
As a developer, I need to run the necessary commands to install and configure shadcn/ui, and then customize the theme to create a bold and confident look.

**Execution Steps:**
1.  A developer must run the following command and follow the interactive prompts with the recommended answers below.

    ```bash
    npx shadcn@latest init
    ```

2.  After initialization, manually edit the `src/app/globals.css` file to change the primary color to a violet shade to achieve the desired bold aesthetic. An example using oklch values:
    ```css
    /* In :root and .dark sections, replace the --primary variables */
    --primary: 0.61 0.21 289;
    --primary-foreground: 0.99 0.01 257;
    ```

**Recommended Configuration (for `init` command):**
- **Which style would you like to use?** `New York`
- **Which color would you like to use as base color?** `Slate`
- **Where is your global CSS file?** `src/app/globals.css`
- **Do you want to use CSS variables for colors?** `Yes`
- **Where is your tailwind.config.js file?** `tailwind.config.ts` (or `.js` if that's what you have)
- **Configure import alias for components?** `@/components`
- **Configure import alias for utils?** `@/lib/utils`
- **Are you using React Server Components?** `Yes`
- **Write configuration to `components.json`?** `Yes`

**Acceptance Criteria:**
- The `npx shadcn@latest init` command completes successfully.
- A `components.json` file is created in the project root.
- `tailwind.config.ts` and `src/app/globals.css` are updated by the script.
- The primary color variables in `globals.css` are manually updated to a violet shade.
- Required dependencies are added to `package.json`.

**Story Points:** 1
*   **Justification:** This is a foundational setup task that involves running a single command and answering prompts. It has low complexity but is a critical first step.
