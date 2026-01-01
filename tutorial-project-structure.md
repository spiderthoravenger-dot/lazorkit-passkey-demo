# Project Structure and Files

This file explains the main folders and files in this demo and why the layout is a good starting point.

Project layout (important parts):

- `app/` — The Next.js App Router folder. Pages and layouts live here.
  - `app/page.tsx` — The main page for this demo. It is a client component (`"use client"`) with a single "Login with Passkey" button and status text. The component uses Tailwind classes for styling.
  - `app/globals.css` — Global CSS for the app. This file includes the Tailwind directives so utility classes are available.
- `public/` — Static assets (images, icons) if needed.
- `tailwind.config.js` — Tailwind configuration. It tells Tailwind to scan `./app/**/*.{js,ts,jsx,tsx}` and `./components/**/*.{js,ts,jsx,tsx}` for class names.
- `postcss.config.js` — PostCSS configuration enabling Tailwind and Autoprefixer.
- `package.json` — Lists scripts and dependencies for the project.
- `README.md` and tutorial files — Guides and explanations (these are documentation only).

Why `app/page.tsx` and Tailwind are used this way

- `app/page.tsx` is a client component so it can use React state and browser APIs (for example, to call a passkey SDK or WebAuthn).
- Tailwind CSS is included via `app/globals.css` with the three directives:
  - `@tailwind base;`
  - `@tailwind components;`
  - `@tailwind utilities;`
- Tailwind utility classes are added directly in `app/page.tsx` (for example `bg-gradient-to-br`, `rounded-2xl`, `text-white`). This keeps the UI code compact and easy to iterate on.

Why this is a good starter template

- Minimal and focused: The project contains a single demo page that highlights passkey login without unrelated complexity.
- Modern stack: It uses Next.js App Router and Tailwind CSS, which are common choices for new React apps.
- Clear integration points: The UI shows where to plug in the Lazorkit SDK and where server endpoints would be added for challenge/verification.
- Easy to extend: You can add API routes or a small server to handle verification, or expand the UI with more pages.

Next steps you might take

- Add a server endpoint to issue WebAuthn challenges and verify assertions.
- Replace the demo placeholder code with calls to the Lazorkit SDK client and server helpers.
- Add environment configuration and deployment steps when moving beyond a local demo.
