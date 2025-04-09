"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/selectsignup");
  };
  const handleBookCar = () => {
    router.push("/bookcar");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-primary p-6 backdrop-blur-md h-18">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left - Navigation Links */}
        <ul className="flex gap-6 text-base font-semibold">
          <li>
            <Link href="/" className="hover:text-secondary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/fleet" className="hover:text-secondary">
              Fleet
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-secondary">
              About
            </Link>
          </li>
        </ul>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/assets/TCar.png"
            alt="CarRental Logo"
            width={200}
            height={50}
          />
        </div>

        {/* Right - Buttons */}
        <div className="flex gap-4">
          <Button
            label="Login"
            onClick={handleSignUp}
            type="outline"
            size="sm"
          />
          <Button
            label="Book Now"
            onClick={handleBookCar}
            type="primary"
            size="sm"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
