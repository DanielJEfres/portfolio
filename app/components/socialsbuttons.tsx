import React from 'react'
import Link from 'next/link'

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center gap-12">
      <Link href="https://www.linkedin.com/in/daniel-efres/" aria-label="LinkedIn">
        <div className="p-2 rounded-lg hover:bg-blue-700 transition duration-300">
          <img src="/images/linkedin.svg" className="w-9 h-9 md:w-11 md:h-11" />
        </div>
      </Link>
      <Link href="https://github.com/DanielJEfres"  aria-label="GitHub">
        <div className="p-2 rounded-lg hover:bg-blue-700 transition duration-300">
          <img src="/images/github-mark.svg" className="w-9 h-9 md:w-11 md:h-11" />
        </div>
      </Link>
      <Link href="/resume.pdf" aria-label="Resume">
        <div className="p-2 rounded-lg hover:bg-blue-700 transition duration-300">
          <img src="/images/resume.svg" className="w-9 h-9 md:w-11 md:h-11" />
        </div>
      </Link>
    </div>
  )
}

export default SocialLinks;
