import React from 'react';
import { FaLinkedin, FaTimes, FaDribbble, FaArrowUp } from 'react-icons/fa';


const StateCard = () => {
  const stats = [
    { label: 'Cars Available', value: '1000+' },
    { label: 'Happy Customers', value: '500+' },
    { label: 'Customer Satisfaction', value: '95%' },
    { label: 'Locations', value: '10+' },
    { label: 'Customer Support', value: '24/7' },
    { label: 'Car Models', value: '200+' },
    { label: 'Rental Bookings', value: '5000+' },
  ];

  return (
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Car Rental Stats</h2>
        <p className="text-gray-500 mb-10">Check out our Car Rental Statistics</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded shadow text-center"
            >
              <FaArrowUp className="text-blue-700 text-2xl mb-2" />
              <div className="text-2xl font-bold text-blue-700">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default StateCard;
