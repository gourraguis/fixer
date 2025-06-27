# Ticket: Enable Markdown Rendering in Chat Messages

**User Story:**
As a user, I want to see formatted text, such as lists and bolding, within chat messages so that the information is easier to read and understand.

**Technical Requirements:**
1.  Add a new dependency for rendering markdown in React (e.g., `react-markdown`).
2.  Update the `Message` component (`src/components/chat/message.tsx`) to process its `text` prop.
3.  Use the installed library to render the markdown `text` content as HTML.
4.  The solution should correctly render common markdown syntax, including lists, bold/italic text, and line breaks.

**Acceptance Criteria:**
- **Given** a message's text content includes markdown for an unordered list (e.g., `- First item\n- Second item`).
- **When** the message is rendered in the chat view.
- **Then** it is displayed as a properly formatted HTML `<ul>` list.
- **And** given a message's text contains bold markdown (e.g., `**important**`), it renders as bold text.

**Story Points:** 2
**Justification:** This task involves adding a new dependency and modifying a single UI component. The complexity is low because the markdown rendering library will handle the core parsing logic.
