import React from 'react';
import ExperienceCards from '../components/ecard';

const experiences = [
  {
    title: "Hackathon Organizer",
    company: "Knight Hacks",
    date: "Dec 2024 - Present",
    location: "Orlando, FL",
    description:
      "Led organizational efforts to create enriching experiences for 500+ participants while fostering a thriving developer community.",
    image: '/images/knighthacks.jpg',
    textColor: 'text-[#a10f7d]', 
    borderColor: 'border-purple-700', // 
    hoverBorderColor: 'hover:border-blue-400', 
    hoverTextColor: 'hover:text-[#a10f7d]', 
  },
  {
    title: "Behavioral Health Technician Assistant",
    company: "South Florida Mental Health and Recovery",
    date: "May 2022 - August 2022",
    location: "Homestead, FL",
    description:
      "Supported mental health interventions and collaborated with professionals to deliver personalized care to over 80 patients during a transformative summer program.",
    image: '/images/sfmhr.jpg',
    textColor: 'text-[#18cc45]', 
    borderColor: 'border-green-400', 
    hoverBorderColor: 'hover:border-blue    -300', 
    hoverTextColor: 'hover:text-[#18cc45]', 
  },
];

export default function Experiences() {
  return (
    <div className="mt-4 md:mt-32 md:mb-32 animate duration-500">
      <h1 className="flex mx-auto justify-center text-3xl text-[#23282e] font-mono mb-8 md:mb-24 animate-fade-down duration-1000 underline decoration-blue-400 underline-offset-4 decoration-2">
        Experience
      </h1>
      <ExperienceCards experiences={experiences} />
    </div>
  );
}
