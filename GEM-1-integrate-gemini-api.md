# Integrate Gemini API for Chatbot Responses

**User Story:**
As a visitor, I want to interact with a chatbot that can answer questions about Abderrahmane Gourragui's professional background, so that I can learn about him in a dynamic way.

**Technical Requirements:**
*   Refactor the chat API endpoint at `src/app/api/chat/route.ts` to integrate the Google Gemini API.
*   Use the `gemini-2.5-flash` model for generating responses.
*   The Google Gemini API key must be securely loaded from the `GEMINI_API_KEY` environment variable, as specified in `README.md`.
*   Remove the current mock implementation in `src/app/api/chat/route.ts`, including the 2-second delay and the 50% failure simulation.
*   Create and implement an initial system prompt for the Gemini model.
    *   The prompt should instruct the model to act as Abderrahmane Gourragui, responding to questions about his professional background, projects, and experience.
    *   Use the content of `README.md` as a basis for the chatbot's knowledge and personality.
    *   The prompt must explicitly instruct the model to format all its responses in Markdown.
*   The API endpoint must continue to accept a JSON request with a `message` field (string) and return a JSON response with a `reply` field (string).
*   Implement robust error handling for the Gemini API integration. This should include handling network issues, authentication failures (e.g., invalid API key), and other potential API errors, returning appropriate HTTP status codes and error messages.

**Implementation Guidance:**
*   Use the `@google/genai` npm package (already installed) to interact with the Gemini API. See the [official GitHub repository](https://github.com/googleapis/js-genai) for full documentation.
*   **Initialization:**
    ```typescript
    import { GoogleGenAI } from '@google/genai';
    const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
    ```
*   **Generating Content with System Prompt:** Use `generateContent` with a `contents` array to provide conversation history. The system prompt should be the first message.
    ```typescript
    const result = await genAI.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [
            { role: "user", parts: [{ text: "SYSTEM PROMPT HERE" }] },
            { role: "model", parts: [{ text: "Ok, I'm ready." }] },
            { role: "user", parts: [{ text: body.message }] }
        ],
    });
    const reply = result.response.text();
    ```

**Acceptance Criteria:**
*   **Given** a user sends a POST request with a valid JSON body `{ "message": "Hello" }` to the `/api/chat` endpoint.
*   **When** the endpoint processes the request.
*   **Then** it must call the `gemini-2.5-flash` model via the Google Gemini API with the user's message and the defined system prompt.
*   **And** it must return a `200 OK` status with a JSON body containing the model's Markdown-formatted response, like `{ "reply": "Hi there! How can I tell you about my experience?" }`.

*   **Given** the `GEMINI_API_KEY` environment variable is missing or invalid.
*   **When** the `/api/chat` endpoint is called.
*   **Then** the server should log a critical error and the endpoint must return a `500 Internal Server Error` response with a clear error message in the JSON body.

*   **Given** the call to the Gemini API fails for any reason (e.g., network error, service unavailable).
*   **When** the `/api/chat` endpoint attempts to get a response.
*   **Then** the endpoint must return a `502 Bad Gateway` or similar `5xx` status code with a clear error message in the JSON body.

**Story Points:** 5
*   **Justification:** This task involves integrating a new external service (Google Gemini API), which requires learning and using its SDK, managing API keys, and implementing non-trivial logic. Complexity is increased by the need to craft an effective system prompt and implement robust error handling for external API calls.
