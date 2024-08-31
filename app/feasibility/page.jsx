"use client";
import { useState } from "react";
import axios from "axios";

const LandFeasibilityForm = () => {
  const [pinCode, setPinCode] = useState("");
  const [subCode, setSubCode] = useState("");
  const [feasibility, setFeasibility] = useState(null);

  const pinCodesData = {
    670001: {
      "0001A": {
        soilQuality: "Clayey",
        description: "Heavy, water-retentive soil.",
        landslideHistory: "Reported in 2001.",
      },
      "0002B": {
        soilQuality: "Sandy",
        description: "Loose, well-drained soil.",
        landslideHistory: "No significant history.",
      },
    },
    670002: {
      "0003C": {
        soilQuality: "Loamy",
        description: "Fertile, well-balanced soil.",
        landslideHistory: "Reported in 1995.",
      },
      "0004D": {
        soilQuality: "Silty",
        description: "Smooth, holds water moderately.",
        landslideHistory: "No significant history.",
      },
    },
    670003: {
      "0005E": {
        soilQuality: "Gravelly",
        description: "Coarse, well-drained soil.",
        landslideHistory: "Reported in 2010.",
      },
      "0006F": {
        soilQuality: "Chalky",
        description: "Alkaline soil, rich in calcium.",
        landslideHistory: "No significant history.",
      },
    },
    670004: {
      "0007G": {
        soilQuality: "Peaty",
        description: "Acidic, high in organic matter.",
        landslideHistory: "Reported in 1990.",
      },
      "0008H": {
        soilQuality: "Clay Loam",
        description: "Balanced, fertile soil.",
        landslideHistory: "No significant history.",
      },
    },
    670005: {
      "0009I": {
        soilQuality: "Sandy Loam",
        description: "Good drainage, easy to work.",
        landslideHistory: "Reported in 2015.",
      },
      "0010J": {
        soilQuality: "Loam",
        description: "Rich, fertile soil.",
        landslideHistory: "No significant history.",
      },
    },
  };

  const handlePinCodeChange = (event) => {
    setPinCode(event.target.value);
  };

  const handleSubCodeChange = (event) => {
    setSubCode(event.target.value);
  };

  const checkFeasibility = async () => {
    const pinCodeInfo = pinCodesData[pinCode];
    if (pinCodeInfo) {
      const subCodeInfo = pinCodeInfo[subCode];
      if (subCodeInfo) {
        const { soilQuality, description, landslideHistory } = subCodeInfo;
        const feasibilityMessage =
          landslideHistory === "No significant history."
            ? `Construction is possible. Use specific materials like reinforced concrete for stability. Soil Type: ${soilQuality}. Description: ${description}`
            : `Danger to construct any building in this area due to a reported landslide. Soil Type: ${soilQuality}. Description: ${description} Landslide History: ${landslideHistory}`;
        setFeasibility(feasibilityMessage);
      } else {
        setFeasibility("Sub-code not found for this PIN Code.");
      }
    } else {
      setFeasibility("PIN Code not found.");
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black" // Text color set to black
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
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black" // Text color set to black
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
