import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import BlackHoleEffect from './BlackHoleEffect';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between children animations
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Smooth animation duration
      ease: "easeOut",
    },
  },
};

const CombinedTextEffect: React.FC = () => {
  return (
    
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] galaxy-bg"
    >
      <div className=" h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Welcome Box */}
        <motion.div
          variants={itemVariants}
          className=" Welcome-box py-[20px] px-[20px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#00010d] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[20px]  font-mono  ">
            Welcome to my Portfolio
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-600">
            Your Partner {""}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            in Secure and Efficient {" "}
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-pink-500">
            Software Development 
          </span>
        </motion.div>
       
        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-lg font-serif  text-purple-300 my-5 max-w-[600px]"
        >
          I&apos;m a Cybersecurity Specialist and Software Developer with a proven track record in Bug Bounty Hunting and Penetration Testing. 
          I am constantly learning new skills, tackling complex security challenges,
          and searching for innovative solutions in cybersecurity by leveraging AI technologies. 
          Explore how my expertise and continuous learning can add value to your projects and business.
        </motion.p>
            
        {/* Button */}
        <motion.a
          variants={itemVariants}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Image */}
      <motion.div
        variants={itemVariants}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/png/maine.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
     
  );
};

export default CombinedTextEffect;
