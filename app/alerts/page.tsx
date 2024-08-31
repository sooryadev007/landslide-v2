"use client";
import Link from "next/link";
const alerts = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center bg-slate-600">
      <div className="bg-white p-8 rounded shadow-md max-w-md text-center">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Sign in so we can send you an SMS alert when a probable catastrophic
          landslide might happen in your area.
        </h1>
        <div className="flex justify-center space-x-4 mt-6">
          <button>
            <Link
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href="/sign-in"
            >
              Sign In
            </Link>
          </button>
          <button>
            <Link
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              href="/sign-up"
            >
              Sign up
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default alerts;
