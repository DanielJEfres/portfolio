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
    url: "https://www.danielefres.dev/experience",
    images: [{ url: "https://www.danielefres.dev/images/daniel.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Efres | Experience",
    description:
      "Daniel Efres is a software engineer and Computer Science student at UCF. He builds full-stack web apps, organizes hackathons, and creates accessible tools for creative communities.",
    images: ["https://www.danielefres.dev/images/daniel.png"],
    creator: "@DanielJEfres",
  },
  metadataBase: new URL("https://www.danielefres.dev"),
};

const experiences: Card[] = [
  {
    title: "Software Engineer Intern",
    company: "BNY Mellon",
    date: "May 2025 - August 2025",
    location: "Lake Mary, FL",
    description:
      "Engineered RESTful APIs to streamline financial data processing, achieving an 89.5% improvement in system efficiency. Designed scalable backend solutions using Spring Boot, collaborated with cross-functional teams, and implemented containerized deployments to enhance banking technology innovation.",
    image: '/images/bnylogo2.jpg',
    skills: [
      { name: "Java", category: "languages" },
      { name: "Kotlin", category: "languages" },
      { name: "Spring Boot", category: "frameworks" },
      { name: "REST APIs", category: "backend" },
      { name: "Oracle SQL", category: "backend" },
      { name: "Docker", category: "tools" },
      { name: "CI/CD", category: "tools" },
      { name: "Google App Engine", category: "tools" },
      { name: "Kubernetes", category: "tools" },
      { name: "JUnit", category: "tools" },
      { name: "H2", category: "tools" },
      { name: "Git", category: "tools" },
      { name: "GitLab", category: "tools" },
      { name: "Agile", category: "methodologies" },
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
      "Developed and maintained web applications serving 60,000+ students and faculty using React, Django, and Flask. Integrated PostgreSQL databases and OpenAI's GPT API to build a retrieval-augmented chatbot for Canvas LMS, enabling AI-driven course material assistance and improving user engagement.",
    image: '/images/cdltechrangers2.png',
    skills: [
      { name: "Python", category: "languages" },
      { name: "React", category: "frontend" },
      { name: "TypeScript", category: "languages" },
      { name: "Django", category: "frameworks" },
      { name: "PostgreSQL", category: "backend" },
      { name: "Canvas LMS", category: "tools" },
      { name: "AWS", category: "tools" },
      { name: "Ollama", category: "tools" },
      { name: "Docker", category: "tools" },
      { name: "Git", category: "tools" },
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
      "Orchestrated event logistics and secured venues for Knight Hacks VIII. Managed access credentials for 60+ members, led onboarding and training initiatives, and streamlined internal communications, fostering an efficient, collaborative, and highly engaged team environment.",
    image: '/images/knighthacks.png',
    skills: [
      { name: "Event Management", category: "tools" },
      { name: "Leadership", category: "soft" },
      { name: "Communication", category: "soft" },
      { name: "Project Management", category: "tools" },
      { name: "Team Coordination", category: "soft" },
      { name: "Documentation", category: "tools" },
      { name: "Problem Solving", category: "soft" }
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
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
        <div className="absolute bottom-0 left-0 w-full h-full">
          <div className="absolute bottom-0 left-0 w-full h-1/2 sm:h-5/6 bg-gradient-to-t from-slate-900/90 via-slate-900/95 to-transparent clip-path-mountain-1"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 sm:h-4/5 bg-gradient-to-t from-slate-800/90 via-slate-900/90 to-transparent clip-path-mountain-2"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/4 sm:h-3/4 bg-gradient-to-t from-slate-800/90 via-slate-900/90 to-transparent clip-path-mountain-3"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/5 sm:h-2/3 bg-gradient-to-t from-slate-800/90 via-slate-900/90 to-transparent clip-path-mountain-4"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/6 sm:h-1/2 bg-gradient-to-t from-slate-700/80 via-slate-800/80 to-transparent clip-path-mountain-5"></div>
        </div>

        <div className="absolute top-0 right-0 h-full w-1/3 sm:w-2/3 bg-gradient-to-l from-slate-900 via-slate-900 to-transparent clip-path-peak-right-back"></div>
        <div className="absolute top-0 right-0 h-full w-1/4 sm:w-1/2 bg-gradient-to-l from-slate-800 via-slate-900 to-transparent clip-path-peak-right-front"></div>

        <div className="absolute top-0 left-0 h-full w-1/3 sm:w-2/3 bg-gradient-to-r from-slate-800 via-slate-900 to-transparent clip-path-peak-left-back"></div>
        <div className="absolute top-0 left-0 h-full w-1/4 sm:w-1/2 bg-gradient-to-r from-slate-700 via-slate-800 to-transparent clip-path-peak-left-front"></div>
      </div>

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
