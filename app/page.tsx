"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState<string>("Not logged in");

  const loginWithPasskey = async () => {
    try {
      setStatus("Starting passkey login...");

      // Demo placeholder for passkey flow
      setTimeout(() => setStatus("Passkey login successful ✅"), 1400);
    } catch (err) {
      console.error(err);
      setStatus("Login failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071025] via-[#0b1220] to-[#0f172a] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-gradient-to-b from-white/3 to-white/2 backdrop-blur-md border border-white/6 rounded-2xl shadow-2xl p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-white">Lazorkit Passkey Demo</h1>
          <p className="mt-2 text-sm text-gray-300">Passwordless sign-in for modern apps</p>
        </div>

        <div className="flex flex-col items-center">
          <button
            onClick={loginWithPasskey}
            className="w-full inline-flex items-center justify-center gap-3 px-5 py-3 rounded-xl text-white font-medium shadow-lg transform transition hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-indigo-500/30 bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M10 2a4 4 0 00-4 4v1H5a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" />
            </svg>
            Login with Passkey
          </button>

          <p className="mt-4 text-center text-sm text-gray-300">{status}</p>
        </div>
      </div>
    </div>
  );
}
