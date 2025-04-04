import React from 'react'

function Hero() {
  return (
    <section className="relative h-[500px] bg-cover bg-center bg-[url('/car-hero.jpg')] flex items-center">
      <div className="container mx-auto text-white text-center">
        <h1 className="text-4xl font-bold">Find Your Perfect Ride</h1>
        <p className="mt-2">Choose from a wide range of cars at affordable prices.</p>
        <button className="mt-4 px-6 py-3 bg-secondary text-black font-bold rounded">Book Now</button>
      </div>
    </section>
  )
}

export default Hero