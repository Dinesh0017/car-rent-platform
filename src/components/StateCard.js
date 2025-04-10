"use client";
import React from "react";
import {
  FaCar,
  FaSmile,
  FaStar,
  FaMapMarkerAlt,
  FaHeadset,
  FaCogs,
  FaClipboardList,
} from "react-icons/fa";

const StateCard = () => {
  const stats = [
    { label: "Cars Available", value: "1000+", icon: <FaCar /> },
    { label: "Happy Customers", value: "500+", icon: <FaSmile /> },
    { label: "Customer Satisfaction", value: "95%", icon: <FaStar /> },
    { label: "Locations", value: "10+", icon: <FaMapMarkerAlt /> },
    { label: "Customer Support", value: "24/7", icon: <FaHeadset /> },
    { label: "Car Models", value: "200+", icon: <FaCogs /> },
    { label: "Rental Bookings", value: "5000+", icon: <FaClipboardList /> },
  ];

  return (
    <section className="mt-20 mb-20">
      <div className="text-center mb-10 block justify-center">
        <h2 className="text-3xl font-bold text-primary flex justify-center mb-2">
          Car Rental Stats
        </h2>
        <p className="text-gray-500 mb-10">
          Check out our Car Rental Statistics
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
      
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-blue-50 p-6  shadow text-center"
          >
            <div className="text-primary text-2xl mb-2 flex justify-center items-center h-10 w-10 mx-auto">
              {stat.icon}
            </div>

            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-primary mt-1">{stat.label}</div>
          </div>
        ))}
        </div>
      
    </section>
  );
};

export default StateCard;
