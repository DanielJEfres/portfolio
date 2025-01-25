import Image from 'next/image';
import { CableCar } from 'lucide-react';

type Card = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  image: string;
  textColor: string;
  borderColor: string;
  hoverBorderColor: string;
  hoverTextColor: string;
};

type CardsProps = {
  experiences: Card[];
};

export default function ExperienceCards({ experiences }: CardsProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="relative w-full max-w-5xl">
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-[#23282e] transform -translate-x-1/2 hidden sm:block">
          <div className="absolute top-[-10px] left-[-15px] animate-cable-car">
            <CableCar size={35} color="black" />
          </div>
        </div>
        {experiences.map((item, index) => (
          <div key={index} className={`flex flex-col sm:flex-row items-center sm:items-start mb-16 md:mb-24 animate-fade-up ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
            <div className={`w-full sm:w-[48%] p-6 rounded-3xl text-[#23282e] shadow-lg border-2 ${item.borderColor} ${item.hoverBorderColor} hover:${item.hoverTextColor} transform transition-all hover:scale-105`}>
              <h3 className={`text-lg sm:text-xl font-mono font-bold mb-2 ${item.textColor}`}>
                {item.title}
              </h3>
              <p className="text-sm sm:text-base font-mono mb-2">
                {item.company} • {item.location}
              </p>
              <p className="text-base sm:text-lg font-mono font-bold mb-2">{item.date}</p>
              <p className="text-sm sm:text-base font-mono">{item.description}</p>
            </div>
            <div className="hidden sm:block sm:w-[48px]"></div> 
            <div className="w-full sm:w-[200px] h-[200px] relative mt-4 sm:mt-0 mb-8 sm:mb-0">
              <Image src={item.image} alt={item.title} layout="fill" objectFit="cover" className="rounded-2xl shadow-lg"/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
