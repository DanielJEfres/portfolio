import React from 'react';
import ExperienceCards from '../components/ecard';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Daniel Efres | Experience",
    description:
        "Daniel Efres is an undergraduate student at the University of Central Florida and an aspiring software engineer.",
    keywords: [
        "Daniel Efres",
        "Software Engineer",
        "UCF",
        "University of Central Florida",
        "Knight Hacks",
        "Web Development",
        "Full Stack",
        "Hackathon Organizer",
        "React",
        "TypeScript",
    ],
    openGraph: {
        type: "website",
        title: "Daniel Efres | Experience",
        description:
            "Explore my experiences as a software engineer and undergraduate student at the University of Central Florida.",
        url: "https://danielefres.dev/experience",
    },
};



const experiences = [
    {
      title: "Hackathon Organizer",
      company: "Knight Hacks",
      date: "Dec 2024 - Present",
      location: "Orlando, FL",
      description:
        "Leading the efforts to secure sponsorships and cultivate long-term relationships with corporate partners, ensuring the success of Knight Hacks VIII. Oversaw event logistics, participant outreach, and the execution of workshops, activities, and ceremonies, engaging 700+ attendees in impactful experiences. I focus on analyzing post-event metrics such as participant satisfaction to continually improve future events.",
      image: '/images/knighthacks.jpg',
      textColor: 'text-[#a10f7d]', 
      borderColor: 'border-purple-700',
      hoverBorderColor: 'hover:border-black',
      hoverTextColor: 'hover:text-[#a10f7d]',
    },
    {
      title: "Behavioral Health Technician Assistant",
      company: "South Florida Mental Health and Recovery",
      date: "May 2022 - August 2022",
      location: "Homestead, FL",
      description:
        "Collaborated with therapeutic and psychological professionals to gather patient data and support mental health interventions for 80+ patients. I contributed to treatment planning by identifying patients' needs, problems, and strengths, resulting in a 15% improvement in patient outcomes over the summer program. My work helped enhance individualized care plans, facilitating a transformative experience for all participants.",
      image: '/images/sfmhr.jpg',
      textColor: 'text-[#18cc45]', 
      borderColor: 'border-green-400', 
      hoverBorderColor: 'hover:border-purple-700', 
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
