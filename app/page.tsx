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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#071025] to-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-xl p-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-slate-900">Lazorkit Passkey Demo</h1>
          <p className="mt-2 text-sm text-slate-700">Passwordless sign-in for modern apps</p>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex justify-center items-center max-h-[200px]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path d="M10 2a4 4 0 00-4 4v1H5a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zM8 6a2 2 0 114 0v1H8V6z" />
            </svg>
          </div>

          <button
            onClick={loginWithPasskey}
            className="mx-auto w-auto inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-white font-semibold shadow-lg transform transition hover:scale-[1.02] bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300/40"
          >
            Login with Passkey
          </button>

          <p className="text-center text-sm text-gray-300">{status}</p>
          <p className="text-xs opacity-60 text-center text-slate-600 mt-2">UI v2 – polished</p>
        </div>
      </div>
    </div>
  );
}
