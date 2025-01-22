import ProjectCards from "../components/pcard";


export default function Projects() {
  const projectData = [
    {
        title: 'Kmodo',
        subtitle: 'Jan 2025 - Present',
        image: '/images/kmodo.png',
        body: '.',
        skills: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'tRPC', 'Drizzle', 'PostgreSQL', 'Next.js'],
        link: 'https://kmodo.org',
      },
      {
        title: 'Portfolio',
        subtitle: 'Jan 2025 - Present',
        image: '/images/person.svg',
        body: 'The website you are currently on!',
        skills: ['React', 'TypeScript', 'TailwindCSS', 'Next.js'],
        link: '/',
      },
    {
      title: 'Spark-A-Hack',
      subtitle: 'Sep 2024 - Nov 2024',
      image: '/images/spark-a-hack.png',
      body: 'An innovative tool that uses the Gemini API to generate creative and impactful hackathon project ideas based off all previous 30,000+ winning hackathon projects on DevPost. It simplifies the brainstorming process for teams, helping them focus on building winning solutions with ease.',
      skills: ['React', 'TypeScript', 'TailwindCSS', 'Python', 'Gemini API', 'Next.js'],
      link: 'https://github.com/cataladev/spark-a-hack',
    },
    {
        title: 'HackTracker',
        subtitle: 'Sep 2024 - Nov 2024',
        image: '/images/hack-tracker.png',
        body: '.',
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
