import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-10">

          {/* alpha defence post */}
          <ProjectCard
  src="/png/alpha.jpg"
  title="Alpha Defence"
  description={`
      -Alpha Defence is a project for cybersecurity from Forticore a  company founded by me, currently in its early stages. The company focuses on integrating artificial intelligence to develop innovative solutions that tackle advanced cyber threats. <br /><br />
    <strong>-Technologies Used:</strong>
    <ul>
      <li>-Artificial Intelligence. (AI)</li>
      <li>-Machine Learning (ML) Algorithms.</li>
      <li>-Network Security Tools.</li>
      <li>-Vulnerability Assessment and Penetration Testing (VAPT) Techniques.</li>
      <li>-Data Analytics Platforms.</li>
      <li>-Neural Network(for AI model).</li>
      
    </ul>
    <br />
    <strong>-Key Focus Areas:</strong>
    <ul>
      <li>-Advanced threat detection and prevention.</li>
      <li>-Real-time monitoring and response systems.</li>
      <li>-AI-driven vulnerability assessment.</li>
      <li>-Neural Network(for AI model).</li>
    </ul>
  `}
/>
        {/* open sorce network tools */}
        <ProjectCard
            src="/png/cybertools.png"
            title="Development of Cybersecurity Tools"
            description={`
              -I’m seeking collaboration from the cybersecurity community to develop open-source tools and enhance blue team resources. Using Python and network libraries, I'm improving tools like Nmap and Burp Suite to strengthen security operations. The code is private on GitHub, with plans for future public release to encourage collaboration.<br /><br />
              <strong>-Technologies Used:</strong>\n
              <ul>
              <li> -Python and c/c++: For developing scripts and  tools with a focus on cybersecurity.</li>
             <li> -Network Libraries (e.g., Scapy, Socket): To enhance network security capabilities.</li>
              <li>-Open-source Security Tools(Nmap, Burp Suite): Improving and customizing tools to better serve cybersecurity professionals.</li>
               <li>-Using IA to generate  more clean and safe code.</li><br /><br /><br /><br />
              </ul>
            `}
          />


                  {/* space portfolio  */}

        <ProjectCard
          src="/png/spaceprotfolioo.png"
          title="Modern website Project"
          description={`
            -This is my personal portfolio website project, built with cutting-edge technologies to deliver a modern, stylish, and high-performance web experience. The site showcases my skills and projects while providing seamless navigation and a visually appealing design. The source code is private on GitHub for now, with future plans for collaboration and improvements.<br /><br />
            <strong>-Technologies Used:</strong>
            <ul>
            <li>-Next.js: For building a fast and scalable React-based web application.</li>
           <li>-Tailwind CSS: For utility-first styling and responsive design.</li>
            <li>-React: For dynamic and interactive user interfaces.</li>
            <li>-Framer Motion: For smooth and interactive animations to enhance the user experience.</li>
            <li>-TypeScript: For type safety and better developer experience.</li><br /><br />
            </ul>
            
          `}/>
              {/* ctf post card */}

          <ProjectCard
          src="/png/banner.jpg"
          title="CTF challenges"
          description={`
            -I actively participate in Capture The Flag (CTF) challenges across multiple platforms to sharpen my skills in solving complex cybersecurity problems. These challenges have allowed me to deepen my understanding of areas like cryptography, web exploitation, and reverse engineering, all while maintaining a focus on continuous learning and improvement.<br /><br />
            <strong>-Technologies Used:</strong>
            <ul>
            <li>-Cryptography: Applied in challenges related to encryption and secure communication.</li>
           <li> -Web Exploitation: Gained expertise in finding and exploiting vulnerabilities in web applications.</li>
            <li>-Reverse Engineering: Developed skills in disassembling and analyzing software to uncover vulnerabilities.</li>
            <li>-CTF Platforms: Participated in various online CTF platforms to simulate real-world hacking scenarios and learn new techniques.</li>
            
            </ul>
            
          `}/>
          {/* software card  */}

<ProjectCard
          src="/png/software.jpg"
          title="software development"
          description={`
            -I specialize in software development, creating efficient and scalable applications using modern technologies. My focus is on writing clean code, building high-performing tools, and solving real-world problems across various domains.<br /><br />
            <strong>-Techniques Used:</strong>
            <ul>
            <li>-Python: For developing scripts and tools, with a focus on automation and cybersecurity applications.</li>
           <li> -JavaScript (Node.js): Used for creating full-stack applications and server-side solutions.</li>
           <li>-TypeScript: To improve code quality and maintainability with static typing.</li>
           <li>-React: For creating dynamic and interactive user interfaces in web applications.</li>
            <li>-Version Control (Git): For efficient collaboration and code management.</li>
            <li>-Database Management: Using SQL and NoSQL databases to handle application data efficiently.</li>
            
            </ul>
              `}
              /> 

              {/* nmap and network scanner tools */}
          <ProjectCard
          src="/png/nmap.jpg"
          title="Network scanner Tools"
          description={`
            -I develop network scanner tools to enhance network security and streamline vulnerability assessments. These tools are designed to identify devices, services, and potential vulnerabilities within a network, helping security professionals and system administrators improve their security posture.<br /><br />
            <strong>-Techniques Used:</strong>
            <ul>
            <li>-Python: For creating the core functionality and automation of network scanning.</li>
           <li> -Scapy: Used for packet crafting and network discovery.</li>
           <li>-Nmap: Integrated for network exploration and vulnerability scanning.</li>
           <li>-Socket Programming: For handling network connections and communication.</li>
            <li>-Machine Learning (optional): To add intelligent analysis features to improve detection capabilities.</li>
           
             </ul>
              `}
              /> 

        
        
      </div>
    

      {/* resarch post component div .i make this after the projects secsion */}
                    <div
                    className="flex flex-col items-center justify-center py-20"
                    id="projects"
                  >
                    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                      My Research and Hobbies 
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-10">

                            {/* resarch post for the website*/}
                        {/* robotics posts */}
                            <ProjectCard
                            src="/png/robotics.jpeg"
                            title="Electronics and Robotics"
                            description={`
                              -I work on electronics and robotics projects, utilizing Raspberry Pi and Arduino to build innovative robots and drones. By integrating electronic components, coding, and 3D printing, I design functional and versatile systems for various applications. These projects blend creativity and technology to push the boundaries of modern robotics.<br /><br />
                              <strong>-Technologies & Tools Used:</strong>
                              <ul>
                              <li>-Raspberry Pi: For processing, automation, and control systems.</li>
                             <li> -Arduino: Used for microcontroller programming and robotics control.</li>
                             <li>-Electronics Components: Sensors, actuators, and circuits for building functional systems.</li>
                             <li>-3D Printing: To design and fabricate custom parts for robots and drones..</li>
                              <li>-Programming Languages: Python and C++ for controlling hardware and implementing logic.</li>
                             
                               </ul>
                                `}
                                /> 

                          <ProjectCard
                            src="/png/iaincyber.jpg"
                            title="Integrating Artificial Intelligence for Advanced Cybersecurity Solutions."
                         
                            description="I am deeply engaged in researching and learning from a variety of sources, including blogs, articles, and academic studies, to explore the integration of artificial intelligence into cybersecurity. My focus is on understanding how AI can be leveraged to create more advanced techniques for detecting and preventing cyber threats. By combining cutting-edge machine learning algorithms with cybersecurity strategies, I aim to develop intelligent systems capable of real-time threat analysis, automated vulnerability assessments, and adaptive defenses. This research is driven by my commitment to advancing the field of cybersecurity and addressing emerging challenges in an increasingly connected world. 
                            <br /><br /> <br /><br />"
                          />
                          <ProjectCard
                            src="/png/tsmc.jpg"
                            title="Nanotechnology and the Chip Revolution."
                            description="I have a deep fascination with nanotechnology and the semiconductor industry, particularly the groundbreaking innovations pioneered by companies like TSMC and ASML. The precision of semiconductor manufacturing and the cutting-edge advancements in lithography technology drive my passion for this field. From extreme ultraviolet (EUV) lithography to advanced chip architectures, every breakthrough inspires me to delve deeper into this transformative domain.

My interest in the strategic landscape of the chip wars stems from the pivotal role these technologies play in shaping the future of computing, powering next-generation innovations, and influencing global competition. As semiconductors become the backbone of artificial intelligence, quantum computing.<br /><br /><br /><br />"
                          
                          />

                            </div>
                          </div>
                          </div>

                        );
                      };

export default Projects;