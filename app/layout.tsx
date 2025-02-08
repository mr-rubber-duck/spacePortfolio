import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/main/Navbar";
import BlackHoleEffect from "@/components/main/BlackHoleEffect";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lassami Taha Amine eddine Portfolio",
  
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden relative`}
      >
         <BlackHoleEffect />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
