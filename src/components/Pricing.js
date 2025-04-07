'use client';
import { useState } from "react";

const PricingSection = () => {
  const [pricingType, setPricingType] = useState("monthly");

  return (
    <section className="text-center pb-10">
      <p className="text-sm text-primary font-semibold">Find Your Perfect Car</p>
      <h2 className="text-3xl font-bold text-primary mt-2">Choose from a Wide Selection</h2>
      <p className="mt-2 text-primary">
        Rent a car that fits your needs and preferences. We offer a diverse range of vehicles.
      </p>
      <div className="mt-6 space-x-4 ">
        <button onClick={() => setPricingType("monthly")} className={`px-4 py-2 border cursor-pointer ${pricingType === "monthly" ? "bg-primary text-white hover:bg-secondary" : "text-primary"}`}>Monthly</button>
        <button onClick={() => setPricingType("yearly")} className={`px-4 py-2 border cursor-pointer ${pricingType === "yearly" ? "bg-primary text-white hover:bg-secondary" : "text-primary"}`}>Yearly</button>
      </div>
      <div className="border mt-6 p-6 max-w-xl mx-auto text-left shadow rounded-xl">
        <h3 className="text-center text-primary font-semibold">Flexible Pricing Options</h3>
        <h1 className="text-3xl font-bold text-primary text-center mt-2">
          {pricingType === "monthly" ? "Starting from $99/month" : "Starting from $999/year"}
        </h1>
        <ul className="mt-4 text-primary space-y-2">
          {pricingType === "monthly" ? (
            <>
              <li>✓ Affordable monthly rates</li>
              <li>✓ No long-term commitment</li>
              <li>✓ Free vehicle upgrades every 3 months</li>
              <li>✓ Cancel or pause anytime</li>
              <li>✓ 24/7 roadside assistance</li>
            </>
          ) : (
            <>
              <li>✓ Lower annual pricing (save up to 20%)</li>
              <li>✓ Free premium car upgrade once a year</li>
              <li>✓ Priority customer support</li>
              <li>✓ Free maintenance and service checks</li>
              <li>✓ Road trip packages included</li>
              <li>✓ Dedicated account manager</li>
            </>
          )}
        </ul>
        <button className="mt-6 w-full bg-primary text-white py-3 rounded-full hover:bg-secondary cursor-pointer">Book Now</button>
      </div>
    </section>
  );
};

export default PricingSection;
