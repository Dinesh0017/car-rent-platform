'use client';

import Button from "./Button";

const ContactForm = () => {
    const handleClick = () => {
        alert("Button clicked!");
      };
    return (
    <section className="align-center pt-10">
      <div className="px-6 md:px-20 py-12">
        <p className="text-sm text-primary font-semibold">Get in touch</p>
        <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
        <p className="mb-8 text-gray-600 max-w-xl">
          Have any questions or need assistance? Feel free to reach out to us.
        </p>
  
        <form className="max-w-xl space-y-6 text-black">
          <div>
            <label className="block mb-1 text-primary">Full Name</label>
            <input
              type="text"
              placeholder="John Doe" 
              className="w-full border border-primary rounded-md px-4 py-2 focus:outline-none placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-primary">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full border border-primary rounded-md px-4 py-2 focus:outline-none placeholder:text-gray-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-primary">Message</label>
            <textarea
              className="w-full border border-primary rounded-md px-4 py-2 focus:outline-none placeholder:text-gray-400"
              rows="5"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="accent-primary w-4 h-4 "/>
            <label htmlFor="terms" className="text-primary text-sm">
              Terms and Conditions
            </label>
          </div>
          <Button
            label="Send Message"
            onClick={handleClick}
            type="primary"
            size="sm"
          />

        </form>
      </div>
    </section>
    );
  };
  
  export default ContactForm;
  