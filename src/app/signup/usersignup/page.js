"use client";
import React from "react";
import Link from "next/link";

const SignUpUser = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center bg-black"
      
    >
      <div className="relative w-full max-w-xl">
        {/* Background black transparent layer */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-md z-0" />

        {/* Content on top */}
        <div className="relative z-10 p-10">
          <h1 className="text-white text-3xl font-bold mb-6 text-center">
            Sign Up
          </h1>
          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 rounded bg-transparent border text-white"
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded bg-transparent border text-white"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="p-2 rounded bg-transparent border text-white"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="password"
                placeholder="Password"
                className="p-2 rounded bg-transparent border text-white"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-2 rounded bg-transparent border text-white"
              />
            </div>
            <button className="bg-primary text-white p-2 rounded mt-4 hover:bg-secondary cursor-pointer">
              Sign Up
            </button>
          </form>
          <p className="text-white text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/signin">
              <span className="font-bold underline cursor-pointer">
                Sign in...
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;
