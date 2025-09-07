import Typewriters from './components/typewriter';
import SocialLinks from './components/socialsbuttons';
import Snow from './components/snow';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Daniel Efres",
  description:
    "Daniel Efres is a Software Engineer who previously worked at BNY, and currently works at UCF TechRangers. He is the secretary of Knight Hacks, and is an undergraduate junior at the University of Central Florida studying Computer Science. His passions are full stack development, machine learning, and helping others break into the tech market.",
  openGraph: {
    type: "website",
    url: "https://www.danielefres.dev/",
    title: "Daniel Efres",
    description:
      "Daniel Efres is a Software Engineer who previously worked at BNY, and currently works at UCF TechRangers. He is the secretary of Knight Hacks, and is an undergraduate junior at the University of Central Florida studying Computer Science. His passions are full stack development, machine learning, and helping others break into the tech market.",
    images: [
      {
        url: "https://www.danielefres.dev/images/daniel.png",
        alt: "Daniel Efres — banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Efres",
    description:
      "Daniel Efres is a Software Engineer who previously worked at BNY, and currently works at UCF TechRangers. He is the secretary of Knight Hacks, and is an undergraduate junior at the University of Central Florida studying Computer Science. His passions are full stack development, machine learning, and helping others break into the tech market.",
    images: [
      {
        url: "https://www.danielefres.dev/images/daniel.png",
        alt: "Daniel Efres — banner",
      },
    ],
    creator: "@DanielJEfres",
  },
};



export default function Home() {
    return (
        <main className="relative bg-bannerImg2 md:bg-bannerImg bg-no-repeat bg-cover bg-bottom w-full h-screen flex items-center justify-center animate-fadeIn duration-100">
            <Snow />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
            <div className="relative backdrop-blur-md border rounded-lg overflow-hidden border-[#524242]/40 shadow-md shadow-black sm:items-start mt-5 mb-5 px-5 sm:px-[20px] md:px-[30px] lg:px-[40px] xl:px-[50px] animate-fade-up duration-1000">
                <h1 className="text-white/90 flex justify-center items-center text-[25px] md:text-[30px] lg:text-[35px] font-mono mt-3">
                    hey! my name is
                </h1>
                <h1 className="text-white flex justify-center items-center text-[30px] md:text-[45px] lg:text-[55px] font-mono">
                    <Typewriters />
                </h1>
                <h1 className="text-white/90 flex justify-center items-center text-[25px] md:text-[30px] lg:text-[35px] font-mono">
                    welcome to my website!
                </h1>

                <div className="flex justify-center items-center mt-3 mb-6">
                    <SocialLinks />
                </div>
            </div>
        </main>
    );
}
