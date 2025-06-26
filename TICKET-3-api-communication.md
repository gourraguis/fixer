# TICKET-3: Add API Communication to `useMessages` Hook

**User Story:** As a developer, I want to extend the `useMessages` hook to handle fetching replies from the chat API, so that the user can have a conversation with the backend.

**Technical Requirements:**
- Modify the `useMessages` hook in `src/hooks/use-messages.ts`.
- When a 'sent' message is added via `addMessage`, the hook should trigger an asynchronous API call to the `/api/chat` endpoint.
- The API call should be a POST request. The body should be a JSON object containing the user's message text, for example: `{ "message": "user's text" }`.
- Upon receiving a successful response from the API, a new 'received' message with the response text should be added to the message list.
- The hook should manage a loading state (e.g., `isLoading`) that is `true` while waiting for the API response and `false` otherwise. This state should be exposed by the hook.
- Handle potential API errors gracefully (e.g., log the error to the console, and ensure the loading state is reset).

**Acceptance Criteria:**
- GIVEN a user sends a message, WHEN the message is added to the list, THEN the `isLoading` state from the hook becomes `true`.
- GIVEN the API call is in progress, WHEN the API returns a successful response, THEN a new 'received' message with the response content is added to the list, and `isLoading` becomes `false`.
- GIVEN the API call fails, WHEN the error is caught, THEN the error is logged to the console, and `isLoading` becomes `false`.

**Story Points:** 8
**Justification:** This task adds significant complexity, including asynchronous logic, API integration (`/api/chat`), state management for loading/error states, and potential side effects. It requires careful handling of the request/response cycle.
