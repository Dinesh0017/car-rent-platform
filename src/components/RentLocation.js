"use client";
import React from 'react'
import Button from './Button';
import CarCarousel from './CarCarousel';
    
const RentLocation = () => {
  {/* Button click*/}
  const handleClick = () => {
    alert("Button clicked!");
  };
    return (
      <section className="py-28 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-primary ">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold  mb-6">Find the Perfect Car Rental</h2>
            <p className=" mb-8 text-lg">Explore our wide range of rental cars</p>
  
            <div className="space-y-4 ">
            <input
              type="email"
              placeholder="Enter Your Location"
              className="px-4 py-2 rounded-md border border-primary mr-2 placeholder:text-gray-400 "
            />
              <Button
              label="Search"
              onClick={handleClick}
              type="primary"
              size="md"
            />
              <p className="text-xs text-primary mt-2">
                By clicking Rent Now you&apos;re confirming that you agree with our <a href="#" className="underline font-semibold">Terms and Conditions</a>.
              </p>
            </div>
          </div>
  
          {/* Image */}
          <div className="flex-1">
            <CarCarousel/>
          </div>
        </div>
      </section>
    );
  };
  
  export default RentLocation;
  