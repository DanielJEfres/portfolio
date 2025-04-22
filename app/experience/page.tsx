import React from 'react';
import ExperienceCards from '../components/ecard';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Daniel Efres",
  description:
    "Daniel Efres is an undergraduate student at the University of Central Florida and an aspiring software engineer.",
  keywords: [
    "Daniel Efres",
    "Software Engineer",
    "UCF",
    "University of Central Florida",
    "Knight Hacks",
    "Hackathon Organizer",
    "Full Stack Developer",
    "Web Development",
    "React",
    "TypeScript",
    "Next.js",
    "Open Source",
    ],
    openGraph: {
        type: "website",
        title: "Daniel Efres | Experience",
        description:
          "Daniel Efres is a software engineer and Computer Science student at UCF. He builds full-stack web apps, organizes hackathons, and creates accessible tools for creative communities.",
        url: "https://danielefres.dev/experience",
        images: [{ url: "https://danielefres.dev/images/favicon4.png" }]
    },
};




const experiences = [
    {
      title: "Incoming Software Engineer Intern",
      company: "BNY",
      date: "May 2025 - August 2025",
      location: "Lake Mary, FL",
      description:
        "Joining BNY as a Software Engineer Intern, where I will contribute to the development and optimization of financial applications. My focus will be on enhancing system efficiency, implementing scalable solutions, and collaborating with cross-functional teams to drive innovation in banking technology.",
      image: '/images/bnylogo2.jpg',
      textColor: 'text-[#04243b]', 
      borderColor: 'border-teal-600',
      hoverBorderColor: 'hover:border-teal-400',
      hoverTextColor: 'hover:text-[#33bdf3]',
    },
    {
      title: "Software Engineer",
      company: "CDL Techrangers",
      date: "March 2025 - Present",
      location: "Orlando, FL",
      description:
      "Developing web applications supporting 60,000+ students and faculty using React, Django, and Flask. Contributing to the Intelligent Course Search LTI by integrating normal and vector PostgreSQL databases, and OpenAI's GPT API to create a retrieval-augmented chatbot in Canvas LMS, enabling AI-driven course material assistance.",
      image: '/images/cdltechrangers2.png',
      textColor: 'text-[#3c2ccecc]', 
      borderColor: 'border-blue-300',
      hoverBorderColor: 'hover:border-blue-200',
      hoverTextColor: 'hover:text-[#33bdf3]',
    },
    {
      title: "Secretary",
      company: "Knight Hacks",
      date: "January 2025 - Present",
      location: "Orlando, FL",
      description:
        "Coordinating event logistics and securing spaces for Knight Hacks VIII, ensuring smooth operations for hackathons, workshops, and meetings. Managed access credentials for 60+ members and led onboarding initiatives, enabling seamless integration. I worked closely with the UCF Registrar to ensure event space availability and supported internal communications, fostering an efficient and collaborative environment within the organization.",
      image: '/images/knighthacks.jpg',
      textColor: 'text-[#5f0849]', 
      borderColor: 'border-purple-700',
      hoverBorderColor: 'hover:border-purple-300',
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
      hoverBorderColor: 'hover:border-green-300', 
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
