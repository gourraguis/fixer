# Ticket: Update Initial Chatbot Greeting

**User Story:**
As a recruiter, I want to be greeted with a clear and engaging multi-part message that explains the chatbot's capabilities, so that I understand how to interact with it effectively from the start.

**Technical Requirements:**
1.  Create a new directory: `src/constants`.
2.  Inside `src/constants`, create a new file: `messages.ts`.
3.  In `messages.ts`, export a constant array. This array will hold the initial message objects.
    - **Message 1 Text:** `Welcome to my portfolio! I'm Abderrahmane's AI twin, built to give you a dynamic tour of my experience.`
    - **Message 2 Text:** `Here are a few things you can do to get started:\n- Paste a job description and I'll analyze how I fit the role.\n- Ask for a deep dive on a technology or industry I've worked in.\n- Ask about my most challenging project.`
4.  Modify the application's initial state logic (likely in `src/hooks/use-messages.ts`) to use the new constant from `src/constants/messages.ts` to populate the initial chat state.
5.  The two messages should be displayed as two separate, consecutive messages from the chatbot (i.e., `variant: 'received'`).

**Acceptance Criteria:**
- **Given** a user opens the portfolio page
- **When** the chat interface loads
- **Then** two initial messages from the chatbot are displayed in order.
- **And** the first message's text is "Welcome to my portfolio! I'm Abderrahmane's AI twin, built to give you a dynamic tour of my experience.".
- **And** the second message's text is "Here are a few things you can do to get started:\n- Paste a job description and I'll analyze how I fit the role.\n- Ask for a deep dive on a technology or industry I've worked in.\n- Ask about my most challenging project.".
- **And** the message content is imported from `src/constants/messages.ts`.
- **And** both initial messages have the `variant` property set to `'received'`.

**Story Points:** 3
**Justification:** Involves creating a new constants file, modifying the `useMessages` hook to change the initial state logic, and ensuring the new data flows correctly. Complexity is low-to-moderate as it touches state management but requires no new complex logic.
