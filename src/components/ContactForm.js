'use client';
import React from 'react';
import Button from '@/components/Button'; // adjust path if needed

const ContactSection = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle form submission logic here
   alert('Form submitted!');
  };

  return (
    <section className="pt-10">
      <div className="px-4 sm:px-8 md:px-20 py-12 mx-auto max-w-7xl">
        <p className="text-sm text-primary font-semibold">Get in touch</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Contact Us</h2>
        <p className="mb-8 text-gray-600 max-w-xl">
          Have any questions or need assistance? Feel free to reach out to us.
        </p>

        <form className="max-w-xl space-y-6 text-black">
          <div>
            <label className="block mb-1 text-primary" >Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              required
              className="w-full border border-primary rounded-md px-4 py-2 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-primary">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              required
              className="w-full border border-primary rounded-md px-4 py-2 focus:outline-none placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block mb-1 text-primary">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here"
              required
              className="w-full border border-primary rounded-md px-4 py-2 focus:outline-none placeholder:text-gray-400"
            ></textarea>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              className="accent-primary w-4 h-4"
            />
            <label htmlFor="terms" className="text-primary text-sm" required>
              Terms and Conditions
            </label>
          </div>

          <Button
            label="Send Message"
            onClick={handleClick}
            type="primary"
            size="md"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
