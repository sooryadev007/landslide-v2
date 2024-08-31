import React from "react";

const safety = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex items-center justify-center">
      <div className="text-white p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Safety Tips</h1>
        <p className="mb-4">
          Safety is a top priority in everything we do. It&apos;s important to
          stay informed and take necessary precautions to protect yourself and
          those around you.
        </p>
        <p className="mb-4">
          Whether at home, work, or on the go, always be aware of your
          surroundings and follow guidelines to ensure your safety.
        </p>
        <p className="mb-4">Here are a few tips to keep in mind:</p>
        <ul className="list-disc list-inside mb-4 text-left">
          <li>Always lock your doors and windows when leaving home.</li>
          <li>Keep emergency contact numbers handy.</li>
          <li>Be cautious when sharing personal information online.</li>
          <li>Wear appropriate safety gear when required.</li>
          <li>
            Stay informed about the latest safety guidelines and protocols.
          </li>
        </ul>
        <p>
          Remember, safety is everyones responsibility. Stay vigilant and stay
          safe!
        </p>
      </div>
    </div>
  );
};

export default safety;
