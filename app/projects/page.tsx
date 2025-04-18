import ProjectCards from "../components/pcard";

import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Daniel Efres | Projects",
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
        title: "Daniel Efres | Projects",
        description:
            "Explore my projects as a software engineer and undergraduate student at the University of Central Florida.",
        url: "https://danielefres.dev/experience",
        images: '/images/favicon2.png',
    },
};

export default function Projects() {
  const projectData = [
    {
      title: 'SightSync',
      subtitle: 'Apr 2025 - Present',
      image: '/images/sightsynclogo.png',
      body: 'SightSync is a hands-free accessibility tool that lets users control their computer using head movements and voice commands. Designed for individuals with limited mobility, it combines real-time webcam tracking and natural speech recognition to enable full OS-level interaction without the need for physical input devices.',
      skills: ['Python','OpenCV', 'Mediapipe', 'Pyautogui', 'Pygame'],
      link: 'https://github.com/cataladev/SightSync',
    },
    {
      title: 'Kmodo',
      subtitle: 'Jan 2025 - Present',
      image: '/images/kmodo.png',
      body: 'Kmodo is a centralized hackathon dashboard designed to simplify the creation, organization, and experience of hackathons. It connects hackers, organizers, and sponsors through an intuitive platform that features project tracking, sponsorship management, team matching, and role-based access.',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'tRPC', 'Drizzle', 'PostgreSQL', 'Next.js'],
      link: 'https://kmodo.org',
    },
    {
      title: 'Portfolio Site',
      subtitle: 'Jan 2025 - Feb 2025',
      image: '/images/favicon2.png',
      body: 'The website you are currently on! This site serves as my personal portfolio, showcasing my projects, skills, and experiences. It highlights the technologies I use and my approach to creating impactful solutions, along with some related experiences I have been a part of. Feel free to explore and learn more about me!',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
      link: '/',
    },
    {
      title: 'Spark-A-Hack',
      subtitle: 'Sep 2024 - Nov 2024',
      image: '/images/spark-a-hack.png',
      body: 'Spark-A-Hack uses the Gemini API to generate innovative hackathon project ideas based on over 30,000 winning projects from DevPost. It helps teams brainstorm by providing unique project ideas to kickstart their hackathon experience, simplifying the ideation process and improving focus on building successful solutions.',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'Gemini API', 'Next.js'],
      link: 'https://github.com/cataladev/spark-a-hack',
    },
    {
      title: 'HackTracker',
      subtitle: 'Sep 2024 - Nov 2024',
      image: '/images/hack-tracker.png',
      body: 'HackTracker is a platform that helps users find personalized hackathon opportunities by leveraging data from MLH’s website. It tailors event recommendations based on user location and education, allowing participants to focus on engaging in the right events and innovating their solutions.',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'Next.js'],
      link: 'https://github.com/cataladev/hacktracker',
    },
  ];
  

  return (
    <div className="mt-8 md:mt-32 md:mb-32">
      <h1 className="flex mx-auto justify-center text-3xl  text-[#23282e] font-mono mb-8 md:mb-32 animate-fade-down duration-1000 underline decoration-blue-400 underline-offset-4 decoration-2">
        Projects
      </h1>
      
      <div className="animate-fade-up">
        <ProjectCards cards={projectData} />
      </div>
      <div className="pb-24" />
    </div>
  );
}
