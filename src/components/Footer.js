"use client";
import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  // Button click
  const handleClick = () => {
    alert("Thanks for subscribing!");
  };

  return (
    <footer className="bg-gray-200 text-primary pb-16 pt-8 px-6 sm:px-12 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b pb-8 border-primary">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Stay Updated with Our Latest News
            </h3>
            <p className="text-sm max-w-md">
              Subscribe to our newsletter and be the first to know about
              exciting updates, exclusive offers, and new services.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleClick();
            }}
            className="flex gap-2 w-full md:w-auto"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-md border border-primary focus:outline-none placeholder:text-sm"
            />
            <Button label="Subscribe" onClick={handleClick} type="subscribe" size="sub" />
          </form>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mt-10 text-sm">
          {[
            {
              title: "About Us",
              items: ["Mission", "Vision", "Values", "Team", "Careers"],
            },
            {
              title: "Services",
              items: [
                "Car Rental",
                "Chauffeur Services",
                "Airport Transfers",
                "Sightseeing Tours",
                "Corporate Travel",
              ],
            },
            {
              title: "Locations",
              items: ["New York", "Los Angeles", "Chicago", "Miami", "Las Vegas"],
            },
            {
              title: "Customer Support",
              items: ["Contact Us", "FAQs", "Terms and Conditions", "Refund Policy", "Sitemap"],
            },
            {
              title: "Social Media",
              items: ["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube"],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-2">{section.title}</h4>
              <ul className="space-y-1">
                {section.items.map((item, i) => (
                  <li key={i} className="hover:underline cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo + Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mt-12 gap-4">
          <Image
            src="/assets/TCar.png"
            alt="Car Rental Logo"
            width={180}
            height={50}
            className="object-contain"
          />
          <p className="text-sm text-right">
            © 2025 Car Rental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
