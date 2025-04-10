import React from "react";

const JoinMember = () => {
  return (
    <section className="mt-20 flex flex-col items-center justify-center p-10 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-primary">Join Our Team</h3>
      <p className="text-primary mt-2 mb-4 flex justify-center max-w-2xl">
        Are you passionate about the car rental industry? Join our team and be
        part of a dynamic and customer-focused company.
      </p>
      <button className="px-6 py-2  bg-primary text-white rounded hover:bg-secondary cursor-pointer transition duration-300">
        View Job Openings
      </button>
    </section>
  );
};

export default JoinMember;
