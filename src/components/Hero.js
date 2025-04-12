"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative w-full h-[100vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/heroCar.jpg"
          alt="Luxury Cars"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <div className="absolute bottom-20 w-full px-6 text-center text-white">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Find Your Perfect Ride in Minutes!
        </h1>
        <p className="text-base md:text-lg mt-4">
          Choose from a wide range of cars at the best prices.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Button
            label="Book Now"
            onClick={() => router.push("/fleet")}
            type="primary"
            size="sm"
          />
          <Link href="/about" className="text-white underline hover:font-semibold">
            Learn More...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
