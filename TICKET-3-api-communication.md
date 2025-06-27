# TICKET-3: Add API Communication to `useMessages` Hook

**User Story:** As a developer, I want to extend the `useMessages` hook to handle fetching replies from the chat API, so that the user can have a conversation with the backend.

**Technical Requirements:**
- Modify the `useMessages` hook in `src/hooks/use-messages.ts`.
- When a 'sent' message is added via `addMessage`, the hook should trigger an asynchronous API call to the `/api/chat` endpoint.
- The API call should be a POST request with a JSON body: `{ "message": "user's text" }`.
- The hook should expose a loading state (`isLoading`) that is `true` while waiting for the API response and `false` otherwise.
- On a successful API response (which contains `{ "reply": "response text" }`), add the `reply` as a new 'received' message.
- On an API failure, add a 'received' message with the text: "Whoops! My AI assistant must be on a coffee break, or I've forgotten to pay the cloud bill again. Please reach out to me on email or LinkedIn instead."

**Acceptance Criteria:**
- GIVEN a 'sent' message is added, WHEN the API call starts, THEN `isLoading` becomes `true`.
- GIVEN the API call succeeds, WHEN the response is received, THEN a new 'received' message is added and `isLoading` becomes `false`.
- GIVEN the API call fails, WHEN the error is caught, THEN a 'received' error message is added and `isLoading` becomes `false`.

**Story Points:** 5
**Justification:** This task involves adding asynchronous logic, API integration, and state management for loading/error states within the hook. It's a moderately complex task.
