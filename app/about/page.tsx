import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: "Daniel Efres | Skills",
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
        title: "Daniel Efres | About",
        description:
            "Explore my skills and expertise as a software engineer and undergraduate student at the University of Central Florida.",
        url: "https://danielefres.dev/skills",
    },
};

export default function AboutMe() {
    const Languages = [
        { name: 'Python', icon:'/images/python.svg' }, 
        { name: 'C', icon:'/images/c.svg'  },
        { name: 'C++', icon:'/images/cpp.svg'  },
        { name: 'Java', icon:'/images/java.svg'  },
        { name: 'Javascript', icon:'/images/javascript.svg'  },
        { name: 'Typescript', icon:'/images/typescript.svg'  },
        { name: 'HTML', icon:'/images/html.svg'  },
        { name: 'CSS', icon:'/images/css.svg'  },
    ];

    const Frameworks = [
        { name: 'React', icon:'/images/react.svg'  },
        { name: 'Angular', icon:'/images/angularicon.svg'  },
        { name: 'Tailwind CSS', icon:'/images/tailwind.svg'  },
        { name: 'Prisma', icon:'/images/prisma.svg'  },
        { name: 'tRPC', icon:'/images/trpc.svg' },
        { name: 'Drizzle', icon:'/images/drizzle.jpg'  },
        { name: 'Tkinter', icon:'/images/tkinter.svg'  },
        { name: 'Pygame', icon:'/images/pygame.svg'  },
        { name: 'SQLite', icon:'/images/sqlite.svg'  },
    ];

    const Tools = [
        { name: 'Git', icon:'/images/git.svg'  },
        { name: 'GitHub', icon:'/images/github.svg'  },
        { name: 'Next.js', icon:'/images/next.svg'  },
        { name: 'Node.js', icon:'/images/node.svg'  },
        { name: 'VSCode', icon:'/images/vscode.svg'  },
        { name: 'Vercel', icon:'/images/vercel.svg'  },
        { name: 'PyCharm', icon:'/images/pycharm.svg'  },
        { name: 'Blender', icon:'/images/blender.svg'  },
        { name: 'OnShape', icon:'/images/onshape.svg'  },
    ];

    
    return (
        <div className="mt-4 md:mt-32 md:mb-32">
            <h1 className="flex mx-auto justify-center text-3xl text-[#23282e] font-mono mb-8 md:mb-24 animate-fade-down duration-1000 underline decoration-blue-400 underline-offset-4 decoration-2">
                About Me
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-between animate-fade-up mx-auto max-w-6xl md:gap-10 px-4 md:px-0 mb-8 md:mb-24">
                <div className="md:w-2/5 md:mx-4 w-full flex justify-center md:justify-end md: mb-8 duration-1000">
                    <Image className="rounded-md w-full h-auto md:w-200 md:h-200 md:animate-fade-right" src="/images/snowpic1.jpg" alt="Picture of me" width={400} height={400} />
                </div>
                <p className="text-[#23282e] md:mx-4 text-[15px] md:text-[21px] font-mono w-full md:w-1/2 mb-8 md:mb-0 md:mr-16 md:animate-fade-left duration-1000">
                    Hello! I'm <a className="font-bold">Daniel Jose Efres</a>, an undergraduate student at the <Link className="text-yellow-500 hover:text-blue-400 duration-300 "href={"https:www.ucf.edu"}>University of Central Florida</Link> studying Computer Science and an aspiring software engineer. I'm currently an organizer for <Link className="text-yellow-500 hover:text-blue-400 duration-300 "href={"https://2024.knighthacks.org/"}>Knight Hacks</Link> , where I have the opportunity to help foster a community of innovation and learning. I have a strong passion for learning and am always looking for ways to grow and expand my skills as a developer. Over the past year, I've explored various areas of software development, with web development being my favorite so far. I’m excited to continue tackling new challenges and working with emerging technologies. In addition to software development, I enjoy working out, playing games, and capturing moments through photography — one of my photos even serves as the background for my home page!
                </p>
            </div>

            <h1 className="flex mx-auto justify-center text-3xl text-[#23282e] font-mono mb-16 md:mb-24 mt-10 animate-fade-up duration-1000 underline decoration-blue-400 underline-offset-4 decoration-2">
                Skills
            </h1>

            
            <div className="flex flex-wrap justify-center gap-8">
                <h2 className="text-[#23282e] text-2xl font-mono w-full text-center mb-4">
                    Programming Languages
                </h2>
                {Languages.map((lang, index) => (
                    <div key={lang.name} className="group relative border-2 border-[#6a6b6d] shadow-md rounded-lg flex justify-center items-center hover:scale-125 transform transition-all duration-300 animate-fade-right" style={{
                        animationDelay: `${index * 200 + 500}ms`,
                    }}>
                        <Image src={lang.icon} alt={lang.name} width={70} height={70} className="m-2" />
                        <span className="absolute bottom-0 left-0 right-0 bg-[#23282e] text-[#F3F4F6] text-xs font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-1">
                            {lang.name}
                        </span>
                    </div>
                ))}
            </div>
           
            
           
            <div className="flex flex-wrap justify-center gap-8 py-8">
                <h2 className="text-[#23282e] text-2xl font-mono w-full text-center mb-4">
                    Frameworks/Libraries
                </h2>
                {Frameworks.map((framework, index) => (
                    <div key={framework.name} className="group relative border-2 border-[#6a6b6d] shadow-lg rounded-md flex justify-center items-center hover:scale-125 transform transition-all duration-300 animate-fade-right" style={{
                        animationDelay: `${index * 200 + 500}ms`,
                    }}>
                        <Image src={framework.icon} alt={framework.name} width={70} height={70} className="m-2" />
                        <span className="absolute bottom-0 left-0 right-0 bg-[#23282e] text-[#F3F4F6] text-xs font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-1">
                            {framework.name}
                        </span>
                    </div>
                ))}
            </div>
           
            
            
            <div className="flex flex-wrap justify-center gap-8 mb-16">
                <h2 className="text-[#23282e] text-2xl font-mono w-full text-center mb-4">
                    Developer Tools
                </h2>
                {Tools.map((tool, index) => (
                    <div key={tool.name} className="group relative border-2 border-[#6a6b6d] shadow-lg rounded-md flex justify-center items-center hover:scale-125 duration-300 animate-fade-right" style={{
                        animationDelay: `${index * 200 + 500}ms`,
                    }}>
                        <Image src={tool.icon} alt={tool.name} width={70} height={70} className="m-2" />
                        <span className="absolute bottom-0 left-0 right-0 bg-[#23282e] text-[#F3F4F6] text-xs font-mono text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-1">
                            {tool.name}
                        </span>
                    </div>
                ))}
            </div>
            
    
            <div className="pb-16" />
        </div>
    );
    
}