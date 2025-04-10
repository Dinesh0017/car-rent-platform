'use client';
import React from 'react';


const TeamMember = () => {
  const teamMembers = Array(6).fill({
    name: 'John Smith',
    title: 'CEO',
    description:
      'John is the CEO of Car Rental Web Platform. With his extensive experience in the car rental industry, he leads our team with passion and vision.',
  });

  return (
    <div className="p-10 font-sans text-center">
      <section>
        <h2 className="text-blue-700 font-bold text-3xl mb-2">Meet Our Team</h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          At Car Rental Web Platform, we have a highly skilled and dedicated team working to provide you the best car rental experience. Get to know our team members below.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-blue-800">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{member.title}</p>
              <p className="text-sm text-gray-500 mb-4">{member.description}</p>
              <div className="flex justify-center space-x-4 text-blue-500">
                <i className="fab fa-linkedin" />
                <i className="fas fa-times" />
                <i className="fab fa-dribbble" />
              </div>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default TeamMember;
