import ProjectShowcase from "../components/pcard";
import { ProjectData } from "../components/pcard";
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
  const projectData: ProjectData[] = [
    {
      id: 'pheratech',
      title: 'Pheratech Systems',
      period: 'Aug 2025 - Sep 2025',
      description: 'Company website for Pheratech, a startup technology company focused on innovative solutions. Built with modern web technologies to showcase the company\'s services, team, and technological capabilities in a professional and engaging manner.',
      longDescription: 'Pheratech Systems website represents the digital presence of an innovative technology startup. The project focuses on creating a professional, modern web platform that effectively communicates the company\'s mission, showcases their technological expertise, and provides potential clients with comprehensive information about their services. The site emphasizes clean design, fast performance, and seamless user experience.',
      features: [
        'Professional corporate website design',
        'Service showcase and company information',
        'Team member profiles and company culture',
        'Contact forms and client interaction tools',
        'Responsive design for all device types'
      ],
      images: [
        {
          src: '/pheratech.gif',
          title: 'Pheratech Systems Website',
          isGif: true
        }
      ],
      colors: {
        cardColor: '#fefefe',
        accent: '#059669',
        textColor: '#111827'
      },
      links: [
        {
          label: 'Website',
          url: 'https://www.pheratech.com/',
          icon: 'external'
        }
      ],
      skills: ['TypeScript', 'React', 'Next.js', 'TailwindCSS']
    },
    {
      id: 'knighthacks-viii',
      title: 'Knight Hacks VIII Website',
      period: 'Jul 2025 - Aug 2025',
      description: 'Official website for Knight Hacks VIII, UCF\'s premier hackathon. Built with modern web technologies to provide an engaging user experience for participants, sponsors, and organizers. Features event information, registration system, and dynamic content management.',
      longDescription: 'The Knight Hacks VIII website serves as the central hub for UCF\'s largest hackathon event. Built using modern web technologies, the site provides a seamless experience for participants to register, access event information, and connect with sponsors. The project emphasizes performance, accessibility, and responsive design to accommodate the diverse needs of the hackathon community.',
      features: [
        'Modern responsive design and user interface',
        'Registration and participant management system',
        'Sponsor showcase and information pages',
        'Event schedule and real-time updates',
        'Interactive components and animations'
      ],
      images: [
        {
          src: '/knighthacks.gif',
          title: 'Knight Hacks VIII Website',
          isGif: true
        }
      ],
      colors: {
        cardColor: '#f1f5f9',
        accent: '#6366f1',
        textColor: '#1e293b'
      },
      links: [
        {
          label: 'Website',
          url: 'https://2025.knighthacks.org/',
          icon: 'external'
        },
        {
          label: 'GitHub',
          url: 'https://github.com/KnightHacks/forge',
          icon: 'github'
        }
      ],
      skills: ['TypeScript', 'React', 'Next.js', 'TailwindCSS', 'tRPC', 'Drizzle', 'PostgreSQL']
    },
    {
      id: 'riffs',
      title: 'Riffs',
      period: 'Apr 2025 - Present',
      description: 'Riffs is a browser-based music tool that converts hummed melodies into editable guitar tabs. It uses real-time pitch detection to generate playable notes, maps them to guitar fret positions, and displays them on a custom piano roll editor—all without needing plugins or MIDI gear.',
      longDescription: 'Riffs represents a breakthrough in accessible music creation, allowing anyone to transform their vocal melodies into professional guitar tablature. The application leverages advanced audio processing algorithms to detect pitch in real-time, then intelligently maps these frequencies to appropriate guitar fret positions. The custom piano roll editor provides an intuitive interface for editing and refining the generated tabs, making music creation accessible to users of all skill levels.',
      features: [
        'Real-time pitch detection from vocal input',
        'Automatic mapping to guitar fret positions',
        'Custom piano roll editor for tab refinement',
        'No plugins or MIDI equipment required',
        'Browser-based accessibility',
        '🏆 Winner of Best App at Bitcamp 2025'
      ],
      images: [
        {
          src: '/riffs.gif',
          title: 'Riffs Music Tool Interface',
          isGif: true
        }
      ],
      colors: {
        cardColor: '#f8fafc',
        accent: '#3b82f6',
        textColor: '#1e293b'
      },
      links: [
        {
          label: 'Website',
          url: 'https://riffs-three.vercel.app/',
          icon: 'external'
        },
        {
          label: 'GitHub',
          url: 'https://github.com/yourusername/riffs',
          icon: 'github'
        },
        {
          label: 'MLH Showcase',
          url: 'https://www.instagram.com/reel/DNV2pLxOdAq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          icon: 'external'
        }
      ],
      skills: ['TypeScript', 'React', 'TailwindCSS', 'Next.js', 'Pitchy', 'FL Studio']
    },
    {
      id: 'sightsync',
      title: 'SightSync',
      period: 'Apr 2025 - Present',
      description: 'SightSync is a hands-free accessibility tool that lets users control their computer using head movements and voice commands. Designed for individuals with limited mobility, it combines real-time webcam tracking and natural speech recognition to enable full OS-level interaction without the need for physical input devices.',
      longDescription: 'SightSync addresses a critical need in accessibility technology by providing comprehensive computer control through head movements and voice commands. The system uses advanced computer vision algorithms to track head position and movement, translating these gestures into precise cursor movements and clicks. Combined with sophisticated speech recognition, users can perform complex computer operations entirely hands-free, opening up new possibilities for individuals with mobility limitations.',
      features: [
        'Real-time head movement tracking',
        'Voice command recognition',
        'Full OS-level interaction capabilities',
        'Customizable gesture sensitivity',
        'Cross-platform compatibility'
      ],
      images: [
        {
          src: '/sightsync.gif',
          title: 'SightSync Accessibility Tool',
          isGif: true
        }
      ],
      colors: {
        cardColor: '#f0f9ff',
        accent: '#0ea5e9',
        textColor: '#0c4a6e'
      },
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/cataladev/SightSync',
          icon: 'github'
        }
      ],
      skills: ['Python', 'OpenCV', 'Mediapipe', 'Pyautogui', 'Pygame']
    },
    {
      id: 'kmodo',
      title: 'Kmodo',
      period: 'Jan 2025 - Present',
      description: 'Kmodo is a centralized hackathon dashboard designed to simplify the creation, organization, and experience of hackathons. It connects hackers, organizers, and sponsors through an intuitive platform that features project tracking, sponsorship management, team matching, and role-based access.',
      longDescription: 'Kmodo revolutionizes the hackathon experience by providing a comprehensive platform that streamlines every aspect of hackathon management. From initial planning to post-event analysis, Kmodo offers tools for organizers to create engaging events, for participants to showcase their projects, and for sponsors to connect with innovative teams. The platform features advanced project tracking, real-time collaboration tools, and intelligent team matching algorithms.',
      features: [
        'Comprehensive project tracking and management',
        'Intelligent team matching algorithms',
        'Sponsor engagement and management tools',
        'Real-time collaboration features',
        'Role-based access control system',
        '🏆 Winner of Knight Hacks Project Launch 2025'
      ],
      images: [
        {
          src: '/kmodo.gif',
          title: 'Kmodo Hackathon Dashboard',
          isGif: true
        }
      ],
      colors: {
        cardColor: '#fefce8',
        accent: '#eab308',
        textColor: '#713f12'
      },
      links: [
        {
          label: 'Website',
          url: 'https://kmodo.org',
          icon: 'external'
        },
        {
          label: 'GitHub',
          url: 'https://github.com/yourusername/kmodo',
          icon: 'github'
        }
      ],
      skills: ['React', 'TypeScript', 'TailwindCSS', 'tRPC', 'Drizzle', 'PostgreSQL', 'Next.js']
    },
    {
      id: 'spark-a-hack',
      title: 'Spark-A-Hack',
      period: 'Sep 2024 - Nov 2024',
      description: 'Spark-A-Hack uses the Gemini API to generate innovative hackathon project ideas based on over 30,000 winning projects from DevPost. It helps teams brainstorm by providing unique project ideas to kickstart their hackathon experience, simplifying the ideation process and improving focus on building successful solutions.',
      longDescription: 'Spark-A-Hack addresses the common challenge of hackathon ideation by leveraging AI to generate creative and feasible project ideas. The system analyzes thousands of successful hackathon projects to understand patterns and trends, then uses advanced language models to generate unique, contextually relevant ideas. This tool helps teams overcome the initial brainstorming hurdle and focus their energy on building innovative solutions.',
      features: [
        'AI-powered project idea generation',
        'Analysis of 30,000+ successful projects',
        'Contextual and relevant suggestions',
        'Customizable idea parameters',
        'Integration with popular hackathon platforms'
      ],
      images: [
        {
          src: '/sparkahack.gif',
          title: 'Spark-A-Hack Idea Generator',
          isGif: true
        }
      ],
      colors: {
        cardColor: '#fdf2f8',
        accent: '#ec4899',
        textColor: '#831843'
      },
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/cataladev/spark-a-hack',
          icon: 'github'
        }
      ],
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'Gemini API', 'Next.js']
    },
    {
      id: 'hacktracker',
      title: 'HackTracker',
      period: 'Sep 2024 - Nov 2024',
      description: 'HackTracker is a platform that helps users find personalized hackathon opportunities by leveraging data from MLH\'s website. It tailors event recommendations based on user location and education, allowing participants to focus on engaging in the right events and innovating their solutions.',
      longDescription: 'HackTracker simplifies the process of discovering relevant hackathons by providing personalized recommendations based on user preferences, location, and skill level. The platform aggregates data from multiple hackathon sources and uses intelligent filtering to present users with events that match their interests and availability. This targeted approach helps participants maximize their hackathon experience and build meaningful connections within the tech community.',
      features: [
        'Personalized hackathon recommendations',
        'Location-based event filtering',
        'Skill level matching',
        'Calendar integration',
        'Community features and networking'
      ],
      images: [
        {
          src: '/hacktracker.gif',
          title: 'HackTracker Platform',
          isGif: true
        }
      ],
      colors: {
        cardColor: '#f0fdf4',
        accent: '#22c55e',
        textColor: '#14532d'
      },
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/cataladev/hacktracker',
          icon: 'github'
        }
      ],
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'Next.js']
    }
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
            <ProjectShowcase cards={projectData} />
          </div>
          <div className="pb-24" />
        </div>
      </div>
    </div>
  );
}
