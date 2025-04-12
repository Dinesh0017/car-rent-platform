import React from "react";

const JoinMember = () => {
  return (
    <section className="mt-20 px-6 py-12 bg-gray-light rounded-lg shadow-lg flex flex-col items-center text-center">
      <h3 className="text-2xl md:text-3xl font-bold text-primary">
        Join Our Team
      </h3>
      <p className="text-primary mt-3 mb-6 max-w-2xl text-sm md:text-base">
        Are you passionate about the car rental industry? Join our team and be
        part of a dynamic and customer-focused company.
      </p>
      <button
        className="px-6 py-2 bg-primary text-white rounded hover:bg-secondary transition duration-300"
        aria-label="View job openings"
      >
        View Job Openings
      </button>
    </section>
  );
};

export default JoinMember;
