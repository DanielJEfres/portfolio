import ProjectCards from "../components/pcard";


export default function Projects() {
  const projectData = [
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
      subtitle: 'Jan 2025 - Present',
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
