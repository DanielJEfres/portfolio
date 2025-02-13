import React from 'react'
import Link from 'next/link'
import { FileUser, Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center gap-12 animate-fade-up duration-1000 delay-200">
      <Link href="https://www.linkedin.com/in/daniel-efres/" aria-label="LinkedIn">
        <div className="p-2 rounded-lg hover:bg-blue-700 transition duration-300">
          <Linkedin className="w-9 h-9 md:w-11 md:h-11 text-[#060708]" />
        </div>
      </Link>
      <Link href="https://github.com/DanielJEfres"  aria-label="GitHub">
        <div className="p-2 rounded-lg hover:bg-blue-700 transition duration-300">
          <Github className="w-9 h-9 md:w-11 md:h-11 text-[#060708]" />
        </div>
      </Link>
      <Link href="/resume.pdf" aria-label="Resume">
        <div className="p-2 rounded-lg hover:bg-blue-700 transition duration-300">
          <FileUser className="w-9 h-9 md:w-11 md:h-11 text-[#060708]" />
        </div>
      </Link>
    </div>
  )
}

export default SocialLinks;
