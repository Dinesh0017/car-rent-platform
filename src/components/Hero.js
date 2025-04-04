"use client";
import Image from "next/image";
import Link from "next/link";
import heroCar from "../assets/heroCar.jpg"; // Ensure the image is inside /assets folder
import Button from "./Button";

const HeroSection = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <section className="relative w-full h-[100vh]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={heroCar}
          alt="Luxury Cars"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Content at the Bottom */}
      <div className="absolute bottom-20 w-full text-center text-white px-6">
        <h1 className="text-5xl font-bold">
          Find Your Perfect Ride in Minutes!
        </h1>
        <p className="text-lg mt-4">
          Choose from a wide range of cars at the best prices.
        </p>

        <div className="h-5"></div>

        <div className="flex flex-row items-center gap-3 content-center justify-center">
          <Link href="/fleet">
            <Button
              label="Book Now"
              onClick={handleClick}
              type="primary"
              size="sm"
            />
          </Link>

          <Link href="/about">
            <button className="text-white rounded hover:font-bold">
              Learn More....
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
