'use client'
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

import RentCar from "@/components/RentCar";

const MapSelector = dynamic(() => import("@/components/MapSelector"), {
  ssr: false,
});

export default function Contact() {
    return (
      <>
        <Navbar />
        <RentCar />
        <ContactForm />
        <MapSelector/>
        <Footer />
      </>
    );
  }