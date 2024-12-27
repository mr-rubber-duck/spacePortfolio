"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      {/* Welcome Section */}
      <motion.div
        variants={slideInFromTop}
        className="py-[12px] px-[15px] border border-[#ff8c00] opacity-[0.95] bg-gradient-to-r from-[#1b324b] via-[#ff0000] to-[#6c63ff] rounded-lg flex items-center justify-center shadow-lg"
      >
        <SparklesIcon className="text-[#ffffff] mr-[10px] h-6 w-6 animate-spin-slow" />
        <h1
          className="text-[20px] font-extrabold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(90deg, #ff8c00, #ffd700)",
            fontFamily: "'Cairo', sans-serif",
          }}
        >
          Crafting solutions that redefine the future
        </h1>
      </motion.div>
      {/* Section Title */}
      <motion.div
        variants={slideInFromLeft(0.6)}
        className="text-[34px] text-white font-bold mt-[20px] text-center mb-[15px] leading-[1.2] tracking-wide"
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        Building innovative apps with cutting-edge technologies
      </motion.div>
      {/* Subtext */}
      <motion.div
        variants={slideInFromRight(0.6)}
        className="italic text-[22px] text-gray-300 mb-10 mt-[10px] text-center max-w-[600px] leading-relaxed"
        style={{ fontFamily: "'Amiri', serif" }}
      >
        Together, we transform your vision into reality, driving success with modern tools and creative strategies.
      </motion.div>
    </div>
  );
};
export default SkillText;