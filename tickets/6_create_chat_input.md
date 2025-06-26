# Ticket 6: Create Chat Input Component

**User Story:**
As a user, I want a text input field and a send button, so that I can type and send messages in the chat application.

**Technical Requirements:**
*   Create a new component, `ChatInput`, preferably in `src/components/ui/chat-input.tsx`.
*   The component should be wrapped in a `<form>` element to handle submissions.
*   The form should contain an `Input` field and a `Button`, arranged horizontally in a single row.
    *   The `Input` component should expand to fill the available horizontal space.
    *   The `Button` component should be positioned to the right of the input.
    *   Use the existing `shadcn/ui` `Input` and `Button` components for a consistent look and feel.
*   The component must manage the state of the text in the input field.
*   The form's `onSubmit` handler should be used to capture both button clicks and "Enter" key presses. The handler must:
    1.  Prevent the default form submission behavior (i.e., page reload).
    2.  Log the current text content of the input to the browser's `console.log`.
    3.  Clear the input field.
*   Add the new `ChatInput` component to the main chat page (`src/app/page.tsx`) at the bottom of the screen, below the `MessageList`.

**Acceptance Criteria:**
*   **Given** the application is running, **When** I view the main page, **Then** I see a text input field and a "Send" button below the message list area, arranged in a single row.
*   **Given** I have typed "Hello world" into the input field, **When** I click the "Send" button, **Then** the string "Hello world" is logged to the browser console, and the input field becomes empty.
*   **Given** I have typed "Test message" into the input field, **When** I press the "Enter" key, **Then** the string "Test message" is logged to the browser console, and the input field becomes empty.

**Story Points:** 3
*Justification: This task involves creating a new stateful component, handling user input via a form, integrating it into the existing page layout, and styling it to be responsive. It is more complex than a simple display component.*
