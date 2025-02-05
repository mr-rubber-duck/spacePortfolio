"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
  Other_skill,
  ida,
  os_used,
} from "@/constants";
import React, { useEffect, useRef } from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";


const Skills = () => {
    const firstVideoRef = useRef<HTMLVideoElement>(null);
    const secondVideoRef = useRef<HTMLVideoElement>(null);
  
    useEffect(() => {
      const firstVideo = firstVideoRef.current;
      const secondVideo = secondVideoRef.current;
  
      if (firstVideo && secondVideo) {
        // Function to handle video timing
        const handleVideoTiming = () => {
          // Sync the second video to play as the first video reaches halfway
          if (firstVideo.currentTime >= firstVideo.duration / 2) {
            if (secondVideo.paused) {
              secondVideo.play(); // Play the second video when first video reaches halfway
            }
          } else {
            if (!secondVideo.paused) {
              secondVideo.play(); // Ensure second video keeps playing when first video is not at halfway
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
        
          {Skill_data.map((image, index) => (
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
          {os_used.map((image, index) => (
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
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {ida.map((image, index) => (
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
                  console.log("First video duration:", (e.target as HTMLVideoElement).duration);
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
                  console.log("Second video duration:", (e.target as HTMLVideoElement).duration);
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