import Image from "next/image";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Project";
import Footer from "@/components/main/Footer";
import { Globe } from "@/components/ui/globe";
import { GlobeDemo } from "@/components/main/world";





 
export default function Home() {
  return (
    <main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <Hero />
      <GlobeDemo />
      <Skills />
      <Projects />
      <Encryption />
      <Footer />
      
    </div>
  </main>
);
}