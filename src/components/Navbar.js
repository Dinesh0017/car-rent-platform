'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from './Button';

const Navbar = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <nav className="bg-white text-primary p-10 shadow-md h-12 flex items-center justify-center">
      <div className="container mx-auto flex items-center justify-between  w-full">
        
        {/* Left - Navigation Links */}
        <ul className="flex gap-6 text-1rem font-stretch-50% font-medium">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/fleet" className=" hover:text-gray-300">Fleet</Link></li>
          <li><Link href="/contact" className=" hover:text-gray-300">Contact</Link></li>
          <li><Link href="/about" className=" hover:text-gray-300">About</Link></li>
        </ul>

        {/* Center - Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Image src="/assets/TCar.png" alt="CarRental Logo" width={256} height={64} />
        </div>

        {/* Right - Buttons */}
        <div className="flex space-x-4 gap-4">
          <Button label="Login" onClick={handleClick} type="outline" size="sm" />
          <Button label="Book Now" onClick={handleClick} type="primary" size="sm" />

        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
