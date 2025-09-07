import ProjectCards from "../components/pcard";

import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Projects | Daniel Efres",
  description:
    "Explore projects by Daniel Efres, a Software Engineer at UCF TechRangers and former BNY intern. He builds full-stack applications, applies machine learning, and creates tools to help others break into tech.",
  openGraph: {
    type: "website",
    url: "https://www.danielefres.dev/projects",
    title: "Projects | Daniel Efres",
    description:
      "Explore projects by Daniel Efres, a Software Engineer at UCF TechRangers and former BNY intern. He builds full-stack applications, applies machine learning, and creates tools to help others break into tech.",
    images: [
      {
        url: "https://www.danielefres.dev/images/daniel.png",
        alt: "Daniel Efres — banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Daniel Efres",
    description:
      "Explore projects by Daniel Efres, a Software Engineer at UCF TechRangers and former BNY intern. He builds full-stack applications, applies machine learning, and creates tools to help others break into tech.",
    images: [
      {
        url: "https://www.danielefres.dev/images/daniel.png",
        alt: "Daniel Efres — banner",
      },
    ],
    creator: "@DanielJEfres",
  },
};



export default function Projects() {
  const projectData = [
    {
      title: 'Riffs',
      subtitle: 'Apr 2025 - Present',
      image: '/images/riffs.png',
      body: 'Riffs is a browser-based music tool that converts hummed melodies into editable guitar tabs. It uses real-time pitch detection to generate playable notes, maps them to guitar fret positions, and displays them on a custom piano roll editor—all without needing plugins or MIDI gear.',
      skills: ['TypeScript', 'React', 'TailwindCSS', 'Next.js', 'Pitchy', 'FL Studio'],
      link: 'https://riffs-three.vercel.app/',
    },
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
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300">
        <div className="absolute bottom-0 left-0 w-full h-full hidden sm:block">
          <div className="absolute bottom-0 left-0 w-full h-3/4 sm:h-full bg-gradient-to-t from-slate-800/90 via-slate-900/90 to-transparent clip-path-projects-mountain-1"></div>
          <div className="absolute bottom-0 left-0 w-full h-2/3 sm:h-5/6 bg-gradient-to-t from-slate-800/90 via-slate-900/90 to-transparent clip-path-projects-mountain-2"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 sm:h-4/5 bg-gradient-to-t from-slate-700/80 via-slate-800/80 to-transparent clip-path-projects-mountain-3"></div>
        </div>

        <div className="absolute top-0 left-0 h-full w-2/5 sm:w-3/5 bg-gradient-to-r from-slate-800 via-slate-900 to-transparent clip-path-projects-left-big hidden sm:block"></div>
        <div className="absolute top-0 left-0 h-full w-1/3 sm:w-2/5 bg-gradient-to-r from-slate-700 via-slate-800 to-transparent clip-path-projects-left-medium hidden sm:block"></div>

        <div className="absolute top-0 right-0 h-full w-1/3 sm:w-1/2 bg-gradient-to-l from-slate-800 via-slate-900 to-transparent clip-path-projects-right-big hidden sm:block"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-block">
              <h1 className="text-3xl md:text-4xl pt-10 font-mono bg-gradient-to-r from-slate-800 via-blue-600 to-slate-800 bg-clip-text text-transparent mb-4 animate-fade-down">
                Projects
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full mb-6"></div>
            </div>
          </div>
          
          <div className="animate-fade-up">
            <ProjectCards cards={projectData} />
          </div>
          <div className="pb-24" />
        </div>
      </div>
    </div>
  );
}
