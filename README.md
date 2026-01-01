## Lazorkit Passkey Demo

## Overview

This project is a small demo that shows a simple passkey-based login flow for a web app. It uses the Lazorkit SDK to demonstrate passwordless sign-in. The demo is built to run against Solana Devnet for any blockchain-related features.

## Tech Stack

- Next.js (App Router)
- React
- Tailwind CSS (for styling)
- Lazorkit SDK (for passkey / auth integration)
- Solana Devnet (for blockchain interactions in the demo)

## Installation

Make sure you have Node.js and npm installed. Then install dependencies from the project folder:

```powershell
cd lazorkit-passkey-demo
npm install
```

Do not install additional packages beyond what the project requires unless you know what you are doing.

## Running Locally

Start the development server from the project folder:

```powershell
cd lazorkit-passkey-demo
npm run dev
```

Open http://localhost:3000 in your browser to view the demo UI.

## What This Demo Shows

- A single-page UI with a "Login with Passkey" button.
- How a passkey-based (passwordless) login can be triggered from a client component.
- Integration points where the Lazorkit SDK would be used to perform authentication and interact with Solana Devnet.

Notes:
- This demo is for learning and testing. It is not production-ready.
- The Lazorkit SDK and Solana Devnet are referenced as the technologies used; the demo contains placeholders where full integration code would go.
