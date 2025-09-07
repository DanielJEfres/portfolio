'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ExternalLink, Github, X, Code2 } from 'lucide-react';

export interface ProjectData {
  id: string;
  title: string;
  period: string;
  description: string;
  longDescription: string;
  features: string[];
  challenges?: string[];
  images: {
    src: string;
    title: string;
    isGif?: boolean;
  }[];
  colors: {
    cardColor: string;
    accent: string;
    textColor: string;
  };
  links: {
    label: string;
    url: string;
    icon: 'github' | 'external';
  }[];
  skills: string[];
}

type CardsProps = {
  cards: ProjectData[];
};

// Skill category colors matching experience cards
const skillCategoryColors = {
  frontend: 'bg-blue-200 text-blue-900 border-blue-300',
  backend: 'bg-green-200 text-green-900 border-green-300',
  tools: 'bg-purple-200 text-purple-900 border-purple-300',
  languages: 'bg-orange-200 text-orange-900 border-orange-300',
  frameworks: 'bg-pink-200 text-pink-900 border-pink-300',
  soft: 'bg-yellow-200 text-yellow-900 border-yellow-300',
  methodologies: 'bg-teal-200 text-teal-900 border-teal-300',
};


const categorizeSkill = (skill: string): keyof typeof skillCategoryColors => {
  const skillLower = skill.toLowerCase();
  
  if (['typescript', 'react', 'tailwindcss', 'next.js', 'html', 'css', 'javascript', 'vue', 'angular', 'svelte'].includes(skillLower)) return 'frontend';
  
  if (['python', 'postgresql', 'django', 'flask', 'node.js', 'express', 'fastapi', 'drizzle'].includes(skillLower)) return 'backend';
  
  if (['java', 'kotlin', 'c++', 'c#', 'swift', 'go', 'rust', 'php', 'ruby'].includes(skillLower)) return 'languages';
  
  if (['spring boot', 'spring', 'laravel', 'rails', '.net', 'flutter', 'react native'].includes(skillLower)) return 'frameworks';
  
  if (['pitchy', 'fl studio', 'git', 'docker', 'aws', 'vercel', 'trpc', 'gemini api', 'opencv', 'mediapipe', 'pyautogui', 'pygame'].includes(skillLower)) return 'tools';
  
  if (['agile', 'scrum', 'devops', 'ci/cd', 'tdd'].includes(skillLower)) return 'methodologies';
  
  if (['leadership', 'communication', 'teamwork', 'problem solving', 'project management'].includes(skillLower)) return 'soft';
  
  return 'tools';
};


function ProjectDialog({ project, isOpen, onClose }: { project: ProjectData | null; isOpen: boolean; onClose: () => void }) {
  if (!project) return null;

  const renderIcon = (iconType: 'github' | 'external') => {
    return iconType === 'github' ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2"
          onClick={onClose}
        >
          <motion.div
            data-dialog
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[80vh] md:max-h-[90vh] overflow-y-auto shadow-2xl relative z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-48 md:h-64 overflow-hidden rounded-t-2xl">
              {project.images[0]?.isGif ? (
                <img
                  src={project.images[0].src}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <Image
                  src={project.images[0]?.src || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority={false}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-3 bg-red-500 hover:bg-red-600 rounded-full transition-colors shadow-lg border-2 border-red-400 hover:border-red-500"
              >
                <X className="h-6 w-6 text-white" />
              </button>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-2xl font-mono font-bold text-white mb-2">{project.title}</h2>
                <div className="flex items-center gap-2 text-white/90">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono">{project.period}</span>
                </div>
              </div>
            </div>

            <div className="p-4 md:p-6">
              <p className="text-slate-800 leading-relaxed mb-4 md:mb-6 text-base font-mono">
                {project.longDescription}
              </p>

              <div className="mb-4 md:mb-6">
                <h3 className="text-lg font-mono font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-slate-700 font-mono">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4 md:mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 size={16} className="text-slate-700" />
                  <span className="text-sm font-mono font-bold text-slate-800">Technologies & Skills</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1.5 text-sm font-mono font-semibold rounded-lg border-2 ${skillCategoryColors[categorizeSkill(skill)]} transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {project.links && project.links.length > 0 && (
                <div className="mb-4 md:mb-6">
                  <h3 className="text-lg font-mono font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                    Links & Resources
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg transition-colors border border-slate-300 font-mono"
                      >
                        {renderIcon(link.icon)}
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-center pt-4 border-t border-slate-200">
                <button
                  onClick={onClose}
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-mono font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ProjectShowcase({ cards }: CardsProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isDialogOpen) {
        closeDialog();
      }
    };

    if (isDialogOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isDialogOpen]);

  const openDialog = (project: ProjectData) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
    setTimeout(() => {
      const dialogElement = document.querySelector('[data-dialog]');
      if (dialogElement) {
        dialogElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">
          {cards.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => openDialog(project)}
            >
              <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-lg shadow-slate-200/50 overflow-hidden h-[600px] flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  {project.images[0]?.isGif ? (
                    <img
                      src={project.images[0].src}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Image
                      src={project.images[0]?.src || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={false}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-mono font-bold mb-1 text-white drop-shadow-2xl">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-white drop-shadow-lg">
                      <Calendar size={14} />
                      <span className="text-sm font-mono">{project.period}</span>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <p className="text-slate-800 leading-relaxed mb-6 text-base font-mono font-medium line-clamp-4">
                    {project.description}
                  </p>

                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Code2 size={16} className="text-slate-700" />
                      <span className="text-sm font-mono font-bold text-slate-800">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-lg border-2 ${skillCategoryColors[categorizeSkill(skill)]} transition-all duration-200 hover:scale-105 shadow-sm`}
                        >
                          {skill}
                        </span>
                      ))}
                      {project.skills.length > 4 && (
                        <span className="px-3 py-1.5 text-xs font-mono font-semibold rounded-lg border-2 bg-slate-200 text-slate-800 border-slate-300">
                          +{project.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <button className="w-full py-3 px-4 bg-slate-800 hover:bg-slate-900 text-white rounded-lg font-mono font-medium transition-colors shadow-lg hover:shadow-xl">
                      Click to see more!
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectDialog 
        project={selectedProject} 
        isOpen={isDialogOpen} 
        onClose={closeDialog} 
      />
    </>
  );
}
