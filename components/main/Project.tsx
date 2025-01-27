import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects and Research 
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

          {/* alpha defence post */}
       
          <ProjectCard
          src="/png/alpha.jpg"
          title="Alpha Defence  "
          description=" Alpha Defence is a cybersecurity company founded by me, currently in its early stages. It integrates artificial intelligence to develop innovative solutions for advanced cyber threats. My mission is to revolutionize cybersecurity by combining cutting-edge AI technologies with strategic security practices to ensure robust and adaptive protection."
        />

        <ProjectCard
          src="/png/spaceprotfolioo.png"
          title="Space themed portfolio."
          description="  This is my portfolio website Project , same as a Project use New technologies for creating fashionable sites, And high consistent performace.source code privet on github."  
        />
        <ProjectCard
          src="/png/cybertools.png"
          title="Development Cyber Security Tools"
          description=" Iam seeking assistance within the cybersecurity expert community to contribute to the development of open-source tools and enhance blue team tools for cybersecurity. My focus is on creating innovative solutions to improve defense mechanisms and strengthen security operations,sorce code privet on github."
        />

          <ProjectCard
          src="/png/banner.jpg"
          title="CTF challenges"
          description="I actively participate in Capture The Flag (CTF) challenges across various platforms to enhance my skills in solving cybersecurity problems. These challenges help me improve my knowledge in areas like cryptography, web exploitation, and reverse engineering while staying engaged in continuous learning."
        />
        
      </div>
    </div>
  );
};

export default Projects;