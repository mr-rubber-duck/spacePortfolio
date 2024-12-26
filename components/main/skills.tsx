"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  languge,
  Other_skill,
} from "@/constants";
import React, { useEffect, useRef } from "react";
import SkillDataProvider from "../sub/SkillsDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  const firstVideoRef = useRef(null);
  const secondVideoRef = useRef(null);

  useEffect(() => {
    const firstVideo = firstVideoRef.current;
    const secondVideo = secondVideoRef.current;

    if (firstVideo && secondVideo) {
      // Function to handle video timing
      const handleVideoTiming = () => {
        // Check if the first video is halfway through
        if (firstVideo.currentTime >= firstVideo.duration / 2) {
          if (secondVideo.paused) {
            secondVideo.play(); // Start the second video when first video is halfway
          }
        } else {
          if (!secondVideo.paused) {
            secondVideo.pause(); // Pause the second video when the first video is not halfway
            secondVideo.currentTime = 0; // Reset the second video to start from the beginning
          }
        }
      };

      // Add timeupdate event listener to sync videos
      firstVideo.addEventListener('timeupdate', handleVideoTiming);

      // Clean up when component unmounts
      return () => {
        firstVideo.removeEventListener('timeupdate', handleVideoTiming);
      };
    }
  }, []);

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {languge.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Other_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex flex-col items-center justify-center bg-cover translate-y-[30%]">
          <div className="w-full relative">
            {/* Original video */}
            <video
              ref={firstVideoRef}
              className="w-full max-w-[100%] max-h-[70vh] object-cover"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              onLoadedMetadata={(e) => {
                console.log("First video duration:", e.target.duration);
              }}
              src="/cards-video.webm"
            />
            {/* Inverted video stacked below */}
            <video
              ref={secondVideoRef}
              className="w-full max-w-[100%] max-h-[70vh] object-cover scale-y-[-1]"
              preload="false"
              playsInline
              loop
              muted
              onLoadedMetadata={(e) => {
                console.log("Second video duration:", e.target.duration);
              }}
              src="/cards-video.webm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
