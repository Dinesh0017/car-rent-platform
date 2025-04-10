'use client';
import React from 'react';
import { FaLinkedin, FaTimes, FaDribbble, FaArrowUp } from 'react-icons/fa';


const StateCard = () => {
  const stats = [
    { label: 'Cars Available', value: '1000+', icon: <FaArrowUp /> },
    { label: 'Happy Customers', value: '500+',icon: <FaLinkedin /> },
    { label: 'Customer Satisfaction', value: '95%', icon: <FaTimes /> },
    { label: 'Locations', value: '10+', icon: <FaDribbble /> },
    { label: 'Customer Support', value: '24/7', icon: <FaArrowUp /> },
    { label: 'Car Models', value: '200+', icon: <FaLinkedin /> },
    { label: 'Rental Bookings', value: '5000+', icon: <FaLinkedin /> }, 
  ];

  return (
      <section className="mt-20">
        <div className="text-center mb-10 block justify-center">
        <h2 className="text-3xl font-bold text-primary flex justify-center mb-2">Car Rental Stats</h2>
        <p className="text-gray-500 mb-10">Check out our Car Rental Statistics</p>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded shadow text-center"
            >
              <div className="text-primary text-2xl mb-2 flex justify-center items-center">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default StateCard;
