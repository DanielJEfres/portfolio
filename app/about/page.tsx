import Image from 'next/image'




export default function AboutMe() {
    return (
        <div className="mt-4 md:mt-32">
            <h1 className="flex mx-auto justify-center text-3xl text-[#23282e] font-mono mb-8 md:mb-24 animate-fade-up duration-1000">
                About Me
            </h1>
            <div className="flex flex-col md:flex-row items-start justify-between mx-auto max-w-6xl gap-10 px-4 md:px-0 mb-8 md:mb-24">
                <p className="text-[#23282e] text-[15px] md:text-[23px] font-mono w-full md:w-1/2 mb-8 md:mb-0 md:mr-16 animate-fade-left duration-1000">
                    Hello! I’m Daniel Jose Efres, a passionate computer science student with a deep love for technology, problem-solving, and innovation. I thrive on creating solutions that make an impact, whether through coding, design, or collaboration. From developing full-stack web applications to working with cutting-edge technologies, I’m always eager to learn and take on new challenges. Outside of my academic work, I enjoy participating in hackathons, mentoring others, and contributing to communities that empower growth and creativity. My goal is to leverage technology to connect people, solve meaningful problems, and build a better future.
                </p>
                <div className="md:w-1/2 w-full flex justify-center md:justify-end animate-fade-right duration-1000">
                    <Image className="rounded-md w-full h-auto md:w-160 md:h-160" src="/images/snowpic1.jpg" alt="Picture of me" width={400} height={400} />
                </div>
            </div>
            <h1 className="flex mx-auto justify-center text-3xl text-[#23282e] font-mono mb-8 mt-10">
                Skills
            </h1>
        </div>
    );
}
