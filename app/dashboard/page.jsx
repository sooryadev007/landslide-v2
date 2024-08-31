"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SuccessPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home or dashboard after a certain delay, if needed
    // setTimeout(() => {
    //   router.push("/home"); // Redirect to home or dashboard
    // }, 3000); // 3 seconds delay
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-3xl font-bold mb-4 text-green-600">
        Log-In Successful!
      </h2>
      <p className="mb-6 text-black text-2xl">
        You will be notified when there is a potential landslide near your area.
      </p>
      <p className="text-gray-700 mb-6 text-2xl">
        We are monitoring the conditions and will keep you updated with relevant
        information.
      </p>
      <a
        href="/" // Change this to the route where users should be redirected
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
      >
        Go to Homepage
      </a>
    </div>
  );
};

export default SuccessPage;
