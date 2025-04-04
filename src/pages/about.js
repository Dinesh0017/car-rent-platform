import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function About() {
  return (
    <div>
    <Navbar />
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">About Us</h2>
      <p className="mt-3">We provide the best car rental services with a variety of options to choose from.</p>
    </section>
    <Footer />
  </div>
  )
}

export default About