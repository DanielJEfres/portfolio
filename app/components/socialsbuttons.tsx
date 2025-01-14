import React from 'react'
import Link from 'next/link'

const SocialLinks = () => {
  return (
    <div className="flex space-x-4 mt-6">
      <Link href="https://www.linkedin.com/in/daniel-efres/" target="_blank" aria-label="LinkedIn">
        <img src="/images/linkedin.svg" alt="LinkedIn" className="w-8 h-8" />
      </Link>
      <Link href="https://github.com/DanielJEfres" target="_blank" aria-label="GitHub">
        <img src="/images/github-mark.svg" alt="GitHub" className="w-8 h-8" />
      </Link>
      <Link href="/resume.pdf" target="_blank" aria-label="Resume">
        <img src="/images/resume.svg" alt="Resume" className="w-8 h-8" />
      </Link>
    </div>
  )
}

export default SocialLinks;
