'use client';
import Image from "next/image";
import { use } from "react";

const galleryImages = [
    { src: "/assets/bens.jpg", alt: "Yellow van" },
    { src: "/assets/bmw.jpeg", alt: "Classic dashboard" },
    { src: "/assets/ducarty.jpg", alt: "Rearview mirror" },
    { src: "/assets/labogini.jpg", alt: "Red car front" },
    { src: "/assets/subaru.jpg", alt: "Car road" },
    { src: "/assets/tesla.jpg", alt: "Car road" },
    
  ];
  
  const GallerySection = () => (
    <section className="">
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold text-blue-900">Car Rental Gallery</h2>
      <div className="flex justify-center mt-4 space-x-12 text-blue-900 font-semibold ">
        <p className="hover:text-secondary">Luxury Cars</p>
        <p className="hover:text-secondary">SUVs</p>
        <p className="hover:text-secondary">Electric Cars</p>
        <p className="hover:text-secondary">Sports Cars</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {galleryImages.map((img, index) => (
          <Image key={index} src={img.src} alt={img.alt} width={500} height={300} className="" />
        ))}
      </div>
      </div>
    </section>
  );
  
  export default GallerySection;
  