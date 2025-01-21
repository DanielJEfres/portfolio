'use client';

import Link from 'next/link';
import Image from 'next/image';

type Card = {
  title: string;
  subtitle: string;
  image: string;
  body: string;
  skills: string[];
  link: string;
};

type CardsProps = {
  cards: Card[];
};

export default function ProjectCards({ cards }: CardsProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-7 lg:px-8 xl:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 w-full">
        {cards.map((item, index) => (
          <div key={index} className="bg-[#F3F4F6] text-[#23282e] animate-fade-up p-6 rounded-3xl transform transition-all hover:scale-105 border-2 border-blue-400 shadow-md hover:shadow-[#F5F1ED] mb-10">
            <div className="flex justify-center mb-4">
              <Image src={item.image} alt={item.title} title={item.title} width={150} height={150} className="rounded-md"/>
            </div>

            <div className="mb-2">
              <Link href={item.link} className="text-xl font-mono font-bold hover:underline hover:text-blue-400">
                {item.title}
              </Link>
              <div className="text-xl font-mono text-blue-400">
                {item.subtitle}
              </div>
            </div>

            <p className="text-sm font-mono mb-4">{item.body}</p>

            <div className="flex flex-wrap gap-4">
              {item.skills.map((skill, idx) => (
                <span key={idx} className="bg-[#4a78b1] text-[#F3F4F6] px-3  py-1 rounded-md text-sm font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
