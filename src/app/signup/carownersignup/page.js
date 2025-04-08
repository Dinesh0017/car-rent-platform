"use client";
import React from "react";
import Link from "next/link";

const SignUpCarOwner = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center bg-black"
      
    >
      <div className="relative w-full max-w-xl">
        {/* Black transparent background layer */}
        <div className="absolute inset-0 bg-black opacity-70 rounded-md z-0" />

        {/* Form Content */}
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
            <input
              type="text"
              placeholder="Company"
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

            <div className="grid grid-cols-2 gap-4">
              <select className="p-2 bg-black bg-opacity-60 text-white rounded border">
                <option>Select Brand</option>
                <option>Toyota</option>
                <option>BMW</option>
                <option>Audi</option>
              </select>
              <select className="p-2 bg-black bg-opacity-60 text-white rounded border">
                <option>Type of Car</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Coupe</option>
              </select>
            </div>

            <div className="text-white mt-2">
              <label className="block mb-1">Select Your Price Range</label>
              <div className="flex flex-col  sm:flex-row sm:space-x-4 space-y-5 sm:space-y-0">
                <label>
                  <input type="radio" name="price" className="mr-2" /> Below
                  $10,000
                </label>
                <label>
                  <input type="radio" name="price" className="mr-2" /> $20,000
                </label>
                <label>
                  <input type="radio" name="price" className="mr-2" /> Up
                  $40,000
                </label>
              </div>
            </div>

            <button className="bg-primary text-white p-2 rounded mt-4 hover:bg-secondary cursor-pointer">
              Sign Up
            </button>
          </form>

          <p className="text-white text-center text-sm mt-4">
            Already have an Account?{" "}
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

export default SignUpCarOwner;
