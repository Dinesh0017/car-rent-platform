"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react"; // Optional icon set, or use SVG

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSignUp = () => router.push("/selectsignup");
  const handleBookCar = () => router.push("/bookcar");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-primary p-6 backdrop-blur-md h-18">
      <div className="container mx-auto flex items-center justify-between relative">
        {/* Left - Navigation Links (Desktop) */}
        <ul className="hidden md:flex gap-6 text-base font-semibold">
          <li>
            <Link href="/" className="hover:text-secondary">Home</Link>
          </li>
          <li>
            <Link href="/fleet" className="hover:text-secondary">Fleet</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-secondary">Contact</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-secondary">About</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

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
        <div className="hidden md:flex gap-4">
          <Button label="Login" onClick={handleSignUp} type="outline" size="sm" />
          <Button label="Book Now" onClick={handleBookCar} type="primary" size="sm" />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 px-6 pb-4 space-y-4 bg-white text-primary font-semibold shadow-md rounded-md transition-all duration-300 ease-in-out ">
          <Link href="/" className="block hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/fleet" className="block hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Fleet</Link>
          <Link href="/contact" className="block hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="/about" className="block hover:text-secondary" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <div className="flex flex-col gap-2 pt-2">
            <Button label="Login" onClick={handleSignUp} type="outline" size="sm" />
            <Button label="Book Now" onClick={handleBookCar} type="primary" size="sm" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
