"use client";
import Image from "next/image";
import Button from "./Button";

const Footer = () => {
  {/* Button click*/}
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <footer className="bg-gray-200 text-primary pb-16 pt-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border-b pb-8 border-primary">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Stay Updated with Our Latest News
            </h3>
            <p className="text-sm">
              Subscribe to our newsletter and be the first to know about
              exciting updates, exclusive offers, and new services.
            </p>
          </div>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md border border-primary "
            />
            <Button
              label="Subscribe"
              onClick={handleClick}
              type="subcribe"
              size="sub"
            />
          </div>
        </div>

        {/* Footer links */}
        <div className="flex justify-between mt-10 cursor-pointer">
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
              items: [
                "New York",
                "Los Angeles",
                "Chicago",
                "Miami",
                "Las Vegas",
              ],
            },
            {
              title: "Customer Support",
              items: [
                "Contact Us",
                "FAQs",
                "Terms and Conditions",
                "Refund Policy",
                "Sitemap",
              ],
            },
            {
              title: "Social Media",
              items: [
                "Facebook",
                "Twitter",
                "Instagram",
                "LinkedIn",
                "YouTube",
              ],
            },
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="font-semibold mb-2">{section.title}</h4>
              <ul className="space-y-1 text-sm">
                {section.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logo Copy Right*/}
        <div className="flex flex-col mt-12">
          <Image
            src="/assets/TCar.png"
            alt="Logo"
            width={256}
            height={64}
            className="-mt-16 -mb-34 flex  justify-start"
          />
          <p className="text-sm -mb-8 flex  justify-end">
            © 2025 Car Rental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
