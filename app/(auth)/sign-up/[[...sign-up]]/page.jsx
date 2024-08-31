"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [pin, setPin] = useState(""); // New state for PIN code
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
          number: parseInt(number, 10), // Ensure number is an integer
          pin: parseInt(pin, 6), // Ensure PIN is an integer
        }),
      });

      if (res.ok) {
        setUsername("");
        setPassword("");
        setNumber("");
        setPin(""); // Clear PIN input
        router.push("/sign-in"); // Redirect to sign-in page after successful sign-up
      } else {
        const { error } = await res.json();
        setError(error);
      }
    } catch (err) {
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-sm bg-white p-8 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700">
            Username:
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 text-black border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border text-black rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="number" className="block text-gray-700">
            Phone Number:
          </label>
          <input
            type="text"
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="pin" className="block text-gray-700">
            PIN Code:
          </label>
          <input
            type="text"
            id="pin"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
