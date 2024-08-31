"use client";
import { useState } from "react";
import axios from "axios";

const LandFeasibilityForm = () => {
  const [pinCode, setPinCode] = useState("");
  const [subCode, setSubCode] = useState("");
  const [feasibility, setFeasibility] = useState(null);

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
  };

  const handleSubCodeChange = (event) => {
    setSubCode(event.target.value);
  };

  const checkFeasibility = async () => {
    try {
      const response = await axios.post("/api/check-feasibility", {
        pinCode,
        subCode,
      });
      setFeasibility(response.data.feasibility);
    } catch (error) {
      console.error("Error checking feasibility:", error);
      setFeasibility("Failed to check feasibility. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Land Feasibility Check
        </h1>

        {/* PIN Code Input */}
        <div className="mb-4">
          <label
            htmlFor="pinCode"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter PIN Code:
          </label>
          <input
            type="text"
            id="pinCode"
            value={pinCode}
            onChange={handlePinCodeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter PIN Code"
          />
        </div>

        {/* Sub-Code Input */}
        <div className="mb-4">
          <label
            htmlFor="subCode"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Enter Sub-Code (optional):
          </label>
          <input
            type="text"
            id="subCode"
            value={subCode}
            onChange={handleSubCodeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter Sub-Code"
          />
        </div>

        {/* Check Feasibility Button */}
        <button
          onClick={checkFeasibility}
          className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          disabled={!pinCode}
        >
          Check Feasibility
        </button>

        {/* Feasibility Result */}
        {feasibility && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Feasibility Result:
            </h2>
            <p className="text-gray-700">{feasibility}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandFeasibilityForm;
