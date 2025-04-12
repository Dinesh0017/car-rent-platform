"use client";
import Image from "next/image";
import { useState } from "react";

const galleryImages = [
  { src: "/assets/bens.jpg", alt: "Yellow van", category: "Luxury" },
  { src: "/assets/bmw.jpeg", alt: "Classic dashboard", category: "Luxury" },
  { src: "/assets/ducarty.jpg", alt: "Rearview mirror", category: "SUVs" },
  { src: "/assets/labogini.jpg", alt: "Red car front", category: "Electric" },
  { src: "/assets/subaru.jpg", alt: "Car road", category: "Sports" },
  { src: "/assets/tesla.jpg", alt: "Car road", category: "Sports" },
];

const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Luxury", "SUVs", "Electric", "Sports"];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section className="pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-6">
          Car Rental Gallery
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 text-primary font-medium mb-8">
          {categories.map((car) => (
            <button
              key={car}
              onClick={() => setActiveCategory(car)}
              className={`px-4 py-2 rounded-full transition-all duration-200 border 
              ${
                activeCategory === car
                  ? "bg-primary text-white border-primary"
                  : "border-primary text-primary hover:bg-primary hover:text-white"
              }
            `}
            >
              {car} Cars
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={500}
                height={300}
                className="rounded-xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
