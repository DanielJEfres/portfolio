'use client';
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Typewriters = () => {
  return (
    <Typewriter
      words={['Daniel Efres']}
      loop={false}
      cursor
      cursorStyle='|'
      typeSpeed={100}
      deleteSpeed={100}
      delaySpeed={1000}
    />
  )
}

export default Typewriters;
