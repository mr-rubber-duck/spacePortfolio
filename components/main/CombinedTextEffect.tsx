import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar } from 'react-icons/fa'; // Importing an icon from react-icons
import Image from 'next/image'; // Assuming you are using next/image

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const CombinedTextEffect = () => {
  const [showFirst, setShowFirst] = useState(true);
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst(prev => !prev);
      setShowEffect(false); // Reset effect state
      setTimeout(() => setShowEffect(true), 600); // Delay effect to start after transition
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20] galaxy-bg"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        {/* Welcome Box */}
        <motion.div
          variants={itemVariants}
          className="Welcome-box py-[20px] px-[20px] border border-[#7042f88b] bg-opacity-50"
        >
          <FaStar className="text-[#00010d] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[20px] font-mono text-white">
            Welcome to my Portfolio
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col gap-2 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={showEffect ? { opacity: 1, transition: { duration: 0.6 } } : {}} 
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-600"
          >
            Your Partner in {" "}
          </motion.span>
          <div className="relative h-[100px]"> {/* Fixed height container */}
            <AnimatePresence mode='wait'>
              {showFirst ? (
                <motion.span
                  key="cyber-security"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                >
                  Cyber Security {" "}
                </motion.span>
              ) : (
                <motion.span
                  key="software-development"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                >
                  Software Development 
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          variants={itemVariants}
          className="text-lg font-serif text-purple-300 my-5 max-w-[600px] bg-opacity-50 p-4 rounded font-family: 'Amiri', serif;"
        >
          
As a Cybersecurity Specialist and Software Developer, I specialize in Bug Bounty Hunting and Penetration Testing, leveraging AI-driven security solutions. Passionate about tackling complex security challenges, I continuously refine my expertise to protect and enhance digital ecosystems. Let’s explore how my skills can elevate your projects and business security
        </motion.p>

        {/* Button */}
        {/* <motion.a
          variants={itemVariants}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] bg-opacity-50 bg-gray-800"
        >
          Learn More!
        </motion.a> */}
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
