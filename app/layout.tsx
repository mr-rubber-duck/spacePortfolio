import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google"; // Correct font names
import "./globals.css";

// Define fonts using correct API
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// Metadata for your page
export const metadata: Metadata = {
  title: "Portfolio Taha Amine",
  description: "This is my portfolio",
};

// Root Layout Component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[#030014] overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
