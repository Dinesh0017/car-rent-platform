import React from 'react'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="container mx-auto p-6">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <form className="mt-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border rounded mb-3" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border rounded mb-3" />
          <textarea placeholder="Your Message" className="w-full p-3 border rounded mb-3"></textarea>
          <button className="px-6 py-3 bg-secondary text-black font-bold rounded">Send</button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default Contact