'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
import { slideInFromTop } from '@/utils/motion'

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className='flex flex-row items-center justify-center px-20 mt-40 w-full h-full z-[20]'
    >
      {/* container for my text */}
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
          variants={slideInFromTop}
          className='welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center'
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5'/>
          <h1 className='welcome-text text-[13px]'>
            Developer and a Cyber Security Researcher and Learner Interested in New Technology
          </h1>
        </motion.div>
      </div>
      <HeroContent />
    </motion.div>
  );
};

export default HeroContent