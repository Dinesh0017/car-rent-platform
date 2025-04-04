import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Fleet() {
  return (
    <div>
    <Navbar />
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">Our Car Fleet</h2>
      {/* Gallery of Cars will go here */}
    </section>
    <Footer />
  </div>
  )
}

export default Fleet