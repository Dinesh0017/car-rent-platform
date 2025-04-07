"use client";
import Image from "next/image";
import {
  FaBook,
  FaCarSide,
  FaClock,
  FaHeadset,
  FaCreditCard,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 p-6 border border-primary rounded-lg bg-white shadow-md mb-4 hover:shadow-xl hover:scale-105 transform transition duration-300">
    <div className="text-primary text-3xl">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="bg-grayLight py-3 px-8 h-[100vh]">
      {/* Title Section with Padding */}
      <div className="text-center mb-20 px-6 leading-relaxed">
        <p className="font-bold text-primary mt-4">Rent Your Dream Car</p>
        <p className=" text-primary text-4xl font-bold mt-2">
          Explore Our Features
        </p>
        <p className=" text-primary mt-3">
          Choose from a wide range of cars and enjoy a seamless car rental
          experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center ">
        {/* Left Features with Padding */}
        <div className="space-y-6 px-6">
          <FeatureItem
            icon={<FaBook />}
            title="Easy Booking"
            description="Book your car in just a few clicks with our user-friendly booking system."
          />
          <FeatureItem
            icon={<FaClock />}
            title="Flexible Rental Durations"
            description="Rent a car for a few hours, days, or weeks - choose the duration that suits your needs."
          />
          <FeatureItem
            icon={<FaHeadset />}
            title="24/7 Customer Support"
            description="Our dedicated support team is available round the clock to assist you with any issues."
          />
        </div>

        {/* Center Video Player with Padding */}
        <div className="relative w-[full] h-[500px] rounded-lg overflow-hidden shadow-lg px-6 p-5">
          <video
            className="w-full h-full"
            autoPlay
            loop
            muted
            controls
          >
            <source
              src="../../public/videos/video.mp4"
              type="video/mp4"
              className=""
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Features with Padding */}
        <div className="space-y-6 px-6">
          <FeatureItem
            icon={<FaCarSide />}
            title="Wide Selection of Cars"
            description="Find the perfect car for your needs from our extensive fleet of vehicles."
          />
          <FeatureItem
            icon={<FaCreditCard />}
            title="Secure Online Payments"
            description="Experience hassle-free and secure online payments for your car rental bookings."
          />
          <FeatureItem
            icon={<FaMapMarkerAlt />}
            title="Convenient Pick-up and Drop-off"
            description="Choose from multiple pick-up and drop-off locations for maximum convenience."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
