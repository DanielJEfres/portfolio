import React from 'react';
import ExperienceCards from '../components/ecard';
import type { Card } from '../components/ecard';
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
    images: [{ url: "https://danielefres.dev/images/daniel.png" }],
  },
};

const experiences: Card[] = [
  {
    title: "Software Engineer Intern",
    company: "BNY Mellon",
    date: "May 2025 - August 2025",
    location: "Lake Mary, FL",
    description:
      "Built RESTful APIs to streamline financial data processing, achieving an 89.5% improvement in system efficiency. Designed and implemented scalable backend solutions using modern frameworks, and collaborated with cross-functional teams to enhance banking technology innovation.",
    image: '/images/bnylogo2.jpg',
    skills: [
      { name: "Java", category: "languages" },
      { name: "Spring Boot", category: "frameworks" },
      { name: "REST APIs", category: "backend" },
      { name: "PostgreSQL", category: "backend" },
      { name: "Docker", category: "tools" },
      { name: "Kubernetes", category: "tools" },
      { name: "Git", category: "tools" },
      { name: "Agile", category: "tools" },
    ],    
    textColor: 'text-[#1e3a8a]',
    borderColor: 'border-blue-800',
    hoverBorderColor: 'hover:border-teal-500',
    hoverTextColor: 'hover:text-[#0d9488]',
  },
  {
    title: "Software Engineer",
    company: "CDL Techrangers",
    date: "March 2025 - Present",
    location: "Orlando, FL",
    description:
      "Developed web applications supporting 60,000+ students and faculty using React, Django, and Flask. Integrated PostgreSQL databases and OpenAI's GPT API to create a retrieval-augmented chatbot in Canvas LMS, enabling AI-driven course material assistance.",
    image: '/images/cdltechrangers2.png',
    skills: [
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "languages" },
      { name: "Django", category: "frameworks" },
      { name: "Flask", category: "frameworks" },
      { name: "PostgreSQL", category: "backend" },
      { name: "OpenAI API", category: "tools" },
      { name: "Canvas LMS", category: "tools" },
      { name: "Python", category: "languages" }
    ],
    textColor: 'text-[#ca8a04]',
    borderColor: 'border-yellow-500',
    hoverBorderColor: 'hover:border-yellow-400',
    hoverTextColor: 'hover:text-[#eab308]',
  },
  {
    title: "Secretary",
    company: "Knight Hacks",
    date: "January 2025 - Present",
    location: "Orlando, FL",
    description:
      "Coordinated event logistics and secured spaces for Knight Hacks VIII. Managed access credentials for 60+ members, led onboarding initiatives, and supported internal communications to foster an efficient and collaborative environment.",
    image: '/images/knighthacks.png',
    skills: [
      { name: "Event Management", category: "tools" },
      { name: "Leadership", category: "tools" },
      { name: "Communication", category: "tools" },
      { name: "Project Management", category: "tools" },
      { name: "Team Coordination", category: "tools" },
      { name: "Documentation", category: "tools" }
    ],
    textColor: 'text-[#5f0849]',
    borderColor: 'border-purple-700',
    hoverBorderColor: 'hover:border-purple-300',
    hoverTextColor: 'hover:text-[#a10f7d]',
  },
];

export default function Experiences() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
        {/* Bottom foothills */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute bottom-0 left-0 w-full h-5/6 bg-gradient-to-t from-slate-900/90 via-slate-900/95 to-transparent clip-path-mountain-1"></div>
          <div className="absolute bottom-0 left-0 w-full h-4/5 bg-gradient-to-t from-slate-800/90 via-slate-900/90 to-transparent clip-path-mountain-2"></div>
          <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-slate-800/90 via-slate-900/90 to-transparent clip-path-mountain-3"></div>
          <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-slate-800/90 via-slate-900/90 to-transparent clip-path-mountain-4"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-700/80 via-slate-800/80 to-transparent clip-path-mountain-5"></div>
        </div>

        {/* Right tall peak (full height, darkest) */}
        <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-l from-slate-900 via-slate-900 to-transparent clip-path-peak-right-back"></div>
        <div className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-slate-800 via-slate-900 to-transparent clip-path-peak-right-front"></div>

        {/* Left tall peak (full height, second darkest) */}
        <div className="absolute top-0 left-0 h-full w-2/3 bg-gradient-to-r from-slate-800 via-slate-900 to-transparent clip-path-peak-left-back"></div>
        <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-slate-700 via-slate-800 to-transparent clip-path-peak-left-front"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block">
              <h1 className="text-3xl md:text-4xl pt-10 font-mono bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent mb-4 animate-fade-down">
                Experience
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6"></div>
            </div>
          </div>
          <ExperienceCards experiences={experiences} />
        </div>
      </div>
    </div>
  );
}
