"use client"; // Mark this file as a Client Component

import { useState } from "react";

const AdminPage = () => {
  const [pin, setPin] = useState("");

  const handleSubmit = () => {
    // Handle the submission of the PIN
    console.log("PIN submitted:", pin);
    alert("PIN submitted: " + pin);
  };

  const handleCancel = () => {
    // Clear the PIN input field or perform another action
    setPin("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-500">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4 text-center text-black">
          Admin Page
        </h1>
        <div className="mb-4">
          <label
            htmlFor="pin"
            className="block text-sm font-medium text-gray-700"
          >
            Enter PIN:
          </label>
          <input
            id="pin"
            type="text"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            placeholder="Enter PIN here"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
