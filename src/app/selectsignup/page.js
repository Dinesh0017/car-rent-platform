"use client"; // ✅ Make this a client component

import React from "react";
import { useRouter } from "next/navigation"; // ✅ Correct import

const SelectSignIn = () => {
  const router = useRouter();

  const handleUserSignIn = () => {
    router.push("/signup/usersignup"); // navigate to /signin
  };

  const handleCarOwnerSignIn = () => {
    router.push("/signup/carownersignup"); // navigate to /signincarowner
  };

  return (
    <div
      className="relative h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/your-background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-10 w-[300px] flex flex-col items-center space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Select Sign Up</h1>

          <button
            onClick={handleUserSignIn}
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-black transition cursor-pointer"
          >
            Sign Up as User
          </button>

          <button
            onClick={handleCarOwnerSignIn}
            className="w-full bg-secondary text-white py-2 px-4 rounded hover:bg-black transition cursor-pointer"
          >
            Sign Up as Car Owner
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectSignIn;
