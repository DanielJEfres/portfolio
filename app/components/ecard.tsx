import Image from 'next/image';
import { MapPin, Calendar, Building2, Code2 } from 'lucide-react';
import Gondola from './gondola'; 

type Skill = {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'frameworks' | 'soft' | 'methodologies';
};

export type Card = {
  title: string;
  company: string;
  date: string;
  location: string;
  description: string;
  image: string;
  skills: Skill[];
  textColor: string;
  borderColor: string;
  hoverBorderColor: string;
  hoverTextColor: string;
};

type CardsProps = {
  experiences: Card[];
};

const skillCategoryColors = {
  frontend: 'bg-blue-200 text-blue-900 border-blue-300',
  backend: 'bg-green-200 text-green-900 border-green-300',
  tools: 'bg-purple-200 text-purple-900 border-purple-300',
  languages: 'bg-orange-200 text-orange-900 border-orange-300',
  frameworks: 'bg-pink-200 text-pink-900 border-pink-300',
  soft: 'bg-yellow-200 text-yellow-900 border-yellow-300',
  methodologies: 'bg-teal-200 text-teal-900 border-teal-300',
};

export default function ExperienceCards({ experiences }: CardsProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-8">
      <div className="relative w-full max-w-6xl">
        <div className="absolute left-1/2 top-0 h-full w-[2px] transform -translate-x-1/2 hidden lg:block">
          <Gondola />
        </div>

        {experiences.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row items-center mb-16 lg:mb-24 animate-duration-1000 animate-fade-down ${
              index % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`} 
            style={{ animationDelay: `${300 * index}ms` }}
          >
            <div className={`w-full lg:w-[45%] relative group ${index % 2 === 0 ? 'lg:ml-20' : 'lg:mr-20'}`}>
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg shadow-slate-200/50 overflow-hidden">
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={`${item.company} logo`} 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl lg:text-2xl font-bold mb-1 text-white drop-shadow-2xl">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white drop-shadow-lg mb-2">
                      <Building2 size={16} />
                      <span className="font-semibold">{item.company}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-4 font-medium">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <p className="text-slate-800 leading-relaxed mb-6 text-sm lg:text-base font-medium">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 size={16} className="text-slate-700" />
                      <span className="text-sm font-bold text-slate-800">Technologies & Skills</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1.5 text-sm font-semibold rounded-lg border-2 ${skillCategoryColors[skill.category]} transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md hover:shadow-blue-300/20`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block lg:w-[10%]"></div>

            <div className="lg:hidden flex items-center justify-center my-8"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
