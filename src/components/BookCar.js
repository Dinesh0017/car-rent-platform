"use client";

import {
  Car,
  Users,
  DoorOpen,
  Gauge,
  CheckCircle,
  Shield,
  Wrench,
} from "lucide-react";
import LeftNavBar from "./LeftNavBar";
import TopFillterBar from "./TopFillterBar";
import Image from "next/image";

const CarCard = () => {
  const carData = [
    {
      title: "Bugatti Chiron",
      image: "/assets/bens.jpg",
      passengers: 2,
      doors: 4,
      transmission: "Auto",
      price: 20000,
    },
    {
      title: "Bugatti Chiron",
      image: "/assets/subaru.jpg",
      passengers: 2,
      doors: 4,
      transmission: "Manual",
      price: 10000,
    },
    {
      title: "Bugatti Chiron",
      image: "/assets/bens.jpg",
      passengers: 2,
      doors: 4,
      transmission: "Auto",
      price: 20000,
    },
    {
      title: "Bugatti Chiron",
      image: "/assets/subaru.jpg",
      passengers: 2,
      doors: 4,
      transmission: "Manual",
      price: 10000,
    },
    {
      title: "Bugatti Chiron",
      image: "/assets/bens.jpg",
      passengers: 2,
      doors: 4,
      transmission: "Auto",
      price: 20000,
    },
    {
      title: "Bugatti Chiron",
      image: "/assets/bens.jpg",
      passengers: 2,
      doors: 4,
      transmission: "Auto",
      price: 20000,
    },
    {
      title: "Bugatti Chiron",
      image: "/assets/bens.jpg",
      passengers: 2,
      doors: 4,
      transmission: "Auto",
      price: 20000,
    },
  ];

  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 py-10 flex flex-col lg:flex-row gap-8 text-primary pt-20">
      {/* Left Filter Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 space-y-6 shadow-xl text-sm">
        <LeftNavBar />
      </aside>

      <section className="w-full lg:w-3/4">
        {/* Top Filters */}
        <TopFillterBar />

        {/* Car Cards - vertical scroll container */}
        <div className="h-[calc(140vh-50px)] overflow-y-auto pr-2 space-y-6">
          {carData.map((car, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row border-2 border-gray-light shadow-md p-4 gap-4"
            >
              <div className="w-full md:w-1/2">
                <Image
                  src={car.image}
                  alt={car.title}
                  width={500}
                  height={500}
                  className="w-full h-60 object-cover rounded-md"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between p-2 sm:p-4">
                <div className="flex flex-wrap items-center gap-4 text-gray-dark mb-3 text-sm sm:text-base">
                  <span className="flex items-center gap-1">
                    <Car size={16} /> Luxury
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {car.passengers} Passengers
                  </span>
                  <span className="flex items-center gap-1">
                    <DoorOpen size={16} /> {car.doors} Doors
                  </span>
                  <span className="flex items-center gap-1">
                    <Gauge size={16} /> {car.transmission}
                  </span>
                </div>

                <ul className="text-sm text-gray-dark space-y-1 mb-4 list-none">
                  <li>
                    <CheckCircle size={14} className="inline text-green-600" />{" "}
                    Unlimited mileage
                  </li>
                  <li>
                    <Shield size={14} className="inline text-green-600" />{" "}
                    Collision Damage Waiver
                  </li>
                  <li>
                    <Wrench size={14} className="inline text-green-600" />{" "}
                    Roadside Assistance
                  </li>
                  <li>
                    <Shield size={14} className="inline text-green-600" /> Third
                    Party Liability
                  </li>
                  <li>
                    <Wrench size={14} className="inline text-green-600" />{" "}
                    Modifications
                  </li>
                </ul>

                {/* Pricing and Book Now button */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-end gap-4">
                  <div className="text-left sm:text-right">
                    <p className="text-lg font-bold text-gray-dark">
                      Total Price
                    </p>
                    <p className="text-2xl font-bold text-yellow-600">
                      ${car.price}
                    </p>
                    <p className="text-xs text-green-500">
                      ✔ Free cancellation
                    </p>
                    <p className="text-xs text-primary">
                      ✔ Online check-in available
                    </p>
                  </div>

                  <button className="bg-secondary hover:bg-black text-white text-lg sm:text-xl font-semibold px-6 py-3 sm:px-8 sm:py-4 shadow w-full sm:max-w-[220px] cursor-pointer">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CarCard;
