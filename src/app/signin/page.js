"use client";
import React from "react";
import Link from "next/link";

const SignIn = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center bg-black"
      
    >
      <div className="relative w-full max-w-md">
        {/* Transparent dark background layer */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-md z-0" />

        {/* Foreground content */}
        <div className="relative z-10 p-10">
          <h1 className="text-white text-3xl font-bold mb-6 text-center">
            Sign In
          </h1>

          <form className="grid grid-cols-1 gap-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 rounded bg-transparent border text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded bg-transparent border text-white"
            />
            <p className="text-sm text-white underline text-right cursor-pointer">
              Forgot Password ...?
            </p>
            <button className="bg-primary text-white p-2 rounded-md mt-2 hover:bg-secondary cursor-pointer">
              Sign In
            </button>
          </form>

          <p className="text-white text-center text-sm mt-4">
            Don’t have an Account?{" "}
            <Link href="/selectsignup">
              <span className="font-bold underline cursor-pointer">
                Sign up...
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
