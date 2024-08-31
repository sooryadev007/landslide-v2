"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Updated import for Next.js 13.4+ usage

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Added error state
  const router = useRouter(); // Added router for redirection

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (res.ok) {
        // Clear the form and redirect to a protected page or dashboard
        setUsername("");
        setPassword("");
        router.push("/dashboard"); // Redirect to a protected route or dashboard
      } else {
        const { error } = await res.json();
        setError(error); // Set error message from response
      }
    } catch (err) {
      setError("Failed to sign in. Please try again."); // Generic error message
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <h2 className="text-2xl font-bold mb-6">Sign In</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={handleSignIn}
        className="w-full max-w-sm bg-white p-8 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username:
          </label>
          <input
            type="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full text-black px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full text-black px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
