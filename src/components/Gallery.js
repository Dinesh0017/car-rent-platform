'use client';
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
    <section className="pt-20 pb-10 px-10">
      <h2 className="text-center text-3xl font-bold text-blue-900">Car Rental Gallery</h2>
      <div className="flex justify-center mt-4 space-x-6 text-primary font-medium cursor-pointer">
        {categories.map((car) => (
          <button
            key={car}
            onClick={() => setActiveCategory(car)}
            className={`${
              activeCategory === car ? "font-bold text-secondary cursor-pointer" : "hover:text-secondary cursor-pointer"
            } focus:outline-none cursor-pointer` }
          >
            {car} Cars
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredImages.map((img, index) => (
          <Image
            key={index}
            src={img.src}
            alt={img.alt}
            width={500}
            height={300}
            className="rounded-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;