import React from 'react'
import CarCarousel from './CarCarousel';
import Button from './Button';
import { useRouter } from "next/navigation";


const RentCar = () => {
      const router = useRouter();
      const handleBookCar = () => {
        router.push("/bookcar");
      };
  return (
    <section className="pt-24 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-primary ">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className=" font-bold text-primary mb-6">
            Rent Your Dream Car
            </h3>
            <h2 className="text-5xl font-bold  mb-6">Find the Perfect Car Rental</h2>
            <p className=" mb-2 text-lg">Explore our wide range of rental cars</p>
  
            <div className="space-y-4 ">
              <Button
              label="Rent Car"
              onClick={handleBookCar}
              type="primary"
              size="md"
            />
              <p className="text-xs text-primary mt-2">
                By clicking Rent Now you're confirming that you agree with our <a href="#" className="underline font-semibold">Terms and Conditions</a>.
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

export default RentCar;