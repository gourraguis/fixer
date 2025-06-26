### Create Chat API Endpoint

**User Story:**
As a client application, I want to send a message to a chat API endpoint, so that I can receive a response.

**Technical Requirements:**
*   Create a new Next.js API route handler that responds to `POST` requests at the path `/api/chat`.
*   The endpoint must parse the JSON body of the incoming request.
*   The request body is expected to be a JSON object with the following structure:
    ```json
    {
      "message": "string"
    }
    ```
*   On success, the endpoint must respond with a `200 OK` status code and a JSON body containing a reply. For this initial version, the reply will be an echo of the received message.
    ```json
    {
      "reply": "string"
    }
    ```
*   If the request body is not valid JSON or is missing the `message` field, the endpoint must respond with a `400 Bad Request` status code and a descriptive error message.

**Acceptance Criteria:**
*   **Given** a `POST` request is sent to `/api/chat` with the JSON body `{"message": "Hello world"}`
    *   **When** the server receives the request
    *   **Then** the server must respond with a `200 OK` status and the JSON body `{"reply": "Hello world"}`.
*   **Given** a `POST` request is sent to `/api/chat` with a malformed JSON body
    *   **When** the server receives the request
    *   **Then** the server must respond with a `400 Bad Request` status code.
*   **Given** a `POST` request is sent to `/api/chat` with a JSON body missing the `message` key (e.g., `{}`)
    *   **When** the server receives the request
    *   **Then** the server must respond with a `400 Bad Request` status code.

**Story Points:** 1
*   **Justification:** The task involves creating a single API endpoint with minimal business logic (echoing a message) and straightforward error handling. It has no external dependencies and is a standard, well-documented feature in Next.js, representing a very low level of complexity. The scope is identical to the previous "echo" endpoint, just with a more meaningful name and response key.
