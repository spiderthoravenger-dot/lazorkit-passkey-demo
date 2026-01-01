# Passkey Login (How this demo works)

This guide explains, in simple terms, how the passkey login flow in this demo works.

1. User clicks the button

- The demo shows a single button labeled "Login with Passkey".
- When you click it, the client code starts the passkey login flow.

2. Browser asks the user to confirm

- The browser will show a system prompt (WebAuthn) to verify the user. This can be a platform authenticator (built into the device) or an external security key.
- The prompt may ask for a biometric check, PIN, or a touch on the key — this depends on the device.

3. Browser produces a credential assertion

- After the user approves the prompt, the browser creates a cryptographic assertion that proves the user controls their passkey.
- The assertion contains a signature over a challenge from the server and some metadata. The browser handles the cryptography — the app does not implement it directly.

4. Client sends the assertion to the server (conceptual)

- In a real implementation, the client would send the assertion to a server endpoint for verification.
- The server verifies the signature and checks that the assertion matches the registered credential for that user.

5. Server completes login and returns a session

- After successful verification, the server issues a session (for example a cookie or JSON Web Token) so the client is authenticated for future requests.

How this demo maps to the steps above

- This project includes a placeholder client UI and a place where the Lazorkit SDK would be called.
- The demo triggers the client-side flow and shows status messages. Full server-side verification and session handling are not included in this simple demo — those are the next steps for a complete integration.

Key points (no deep crypto required)

- WebAuthn / passkeys rely on the browser and device to do the cryptography. Your app mainly:
  - asks the browser to start the flow,
  - receives the result (assertion), and
  - sends it to a server for verification.
- You do not need to implement signature algorithms yourself — that is handled by the platform and the WebAuthn APIs.
- The Lazorkit SDK is intended to simplify the client and server integration points for passkeys in this demo.

If you want to try a full flow locally, you would add a server endpoint that issues a challenge and verifies the assertion sent from the client.
