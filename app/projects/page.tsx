import ProjectCards from "../components/pcard";


export default function Projects() {
  const projectData = [
    {
        title: 'KModo',
        subtitle: 'Jan 2025 - Present',
        image: '/images/kmodo.png',
        body: '.',
        skills: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'tRPC', 'Prisma', 'PostgreSQL'],
        link: 'https://kmodo.org',
      },
      {
        title: 'Portfolio',
        subtitle: 'Jan 2025 - Present',
        image: '/images/person.svg',
        body: '.',
        skills: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
        link: '/',
      },
    {
      title: 'Spark-A-Hack',
      subtitle: 'Sep 2024 - Nov 2024',
      image: '/images/spark-a-hack.png',
      body: 'An innovative tool that uses the Gemini API to generate creative and impactful hackathon project ideas based off all previous 30,000+ winning hackathon projects on DevPost. It simplifies the brainstorming process for teams, helping them focus on building winning solutions with ease.',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'Gemini API'],
      link: 'https://github.com/cataladev/spark-a-hack',
    },
    {
        title: 'HackTracker',
        subtitle: 'Sep 2024 - Nov 2024',
        image: '/images/hack-tracker.png',
        body: '.',
        skills: ['React', 'TypeScript', 'TailwindCSS', 'Python'],
        link: 'https://github.com/cataladev/hacktracker',
      },
  ];

  return (
    <div className="mt-8 md:mt-32 md:mb-32">
      <h1 className="flex mx-auto justify-center text-3xl  text-[#23282e] font-mono mb-8 md:mb-24 animate-fade-down duration-1000 underline decoration-blue-400 underline-offset-4 decoration-2">
        Projects
      </h1>
      <ProjectCards cards={projectData} />
      <div className="pb-24" />
    </div>
  );
}
