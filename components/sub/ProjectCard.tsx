"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useRef, useState, useContext, useEffect, createContext } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left - width / 2) / width) * 30;
    const y = ((e.clientY - top - height / 2) / height) * -30;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn("py-10 flex flex-wrap gap-6 items-center justify-center w-full", containerClassName)}
        style={{ perspective: "1200px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={() => setIsMouseEntered(true)}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={cn(
            "relative transition-transform duration-300 ease-out transform-gpu",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("h-full w-full max-w-[400px] min-h-[450px] flex flex-col", className)}>
      {children}
    </div>
  );
};

const ProjectCard = ({ src, title, description }: { src: string; title: string; description: string }) => {
  return (
    <CardContainer className="rounded-lg border border-[#2A0E61] shadow-lg m-4 w-full max-w-[400px]">
      <CardBody className="relative overflow-hidden bg-gray-900 p-6 rounded-lg flex flex-col">
        <Image
          src={src}
          alt={title}
          width={900}
          height={600}
          className="w-full h-auto object-cover rounded-lg"
        />
        <div className="relative p-4 flex-grow flex flex-col">
          <h1 className="text-2xl font-semibold text-white break-words">{title}</h1>
          <div className="mt-2 text-gray-300 break-words flex-grow" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
