"use client";
import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "John Smith",
    title: "CEO, ABC Car Rentals",
    company: "Red Baton",
    image: "/assets/bens.jpg",
  },
  {
    name: "Emily Johnson",
    title: "Marketing Manager, CarGo",
    company: "Asron",
    image: "/assets/bmw.jpeg",
  },
  {
    name: "Michael Brown",
    title: "Founder, QuickRide",
    company: "Colarado",
    image: "/assets/ducarty.jpg",
  },
  {
    name: "Sarah Wilson",
    title: "Director, RoadTrip Inc.",
    company: "Evils",
    image: "/assets/labogini.jpg",
  },
  {
    name: "Olivia Davis",
    title: "Product Designer, AutoRent",
    company: "Red Baton",
    image: "/assets/tesla.jpg",
  },
  {
    name: "Olivia Davis",
    title: "Product Designer, AutoRent",
    company: "Vamp",
    image: "/assets/subaru.jpg",
  },
];

const View = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const { name, title, company, image } = testimonials[current];

  return (
    <section className="bg-gray-200 py-32 px-6 text-[#1d2b64]">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
        {/* Left Arrow */}
        <div className="md:ml-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 border border-[#1d2b64] rounded-full flex items-center justify-center"
          >
            <FaChevronLeft />
          </button>
        </div>

        {/* Testimonial Content */}
        <div className="text-center md:text-left max-w-3xl w-full">
          <div className="flex justify-center mb-4 text-primary">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
            
          </div>
          <h2 className="flex text-2xl font-bold mb-6 items-center justify-center">Car Rental made easy!</h2>

          

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <img
              src={image}
              alt={name}
              width={56}
              height={56}
              className="w-14 h-14 rounded-md object-cover"
            />

            <div className="text-center sm:text-left">
              <p className="font-bold">{name}</p>
              <p className="text-sm">{title}</p>
            </div>

            <div className="border-l sm:pl-4 text-center sm:text-left hidden sm:block">
              <p className="font-bold">{company}</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === current ? "bg-primary" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <div className="md:mr-8">
          <button
            onClick={handleNext}
            className="w-10 h-10 border border-[#1d2b64] rounded-full flex items-center justify-center"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default View;
