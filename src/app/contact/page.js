'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import MapSelector from "@/components/MapSelector";
import RentCar from "@/components/RentCar";

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