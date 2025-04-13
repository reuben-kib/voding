'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonLink?: string;
}

export function HeroSection({
  title = "We build web apps that don't suck.",
  subtitle = "From Landing Pages To Scalable Webapps",
  description = "(Yes, we can explain those in plain English.)",
  primaryButtonText = "Schedule a Call",
  secondaryButtonText = "Know More",
  primaryButtonLink = "#",
  secondaryButtonLink = "#",
}: HeroSectionProps) {
  return (
    <section 
      className="relative flex flex-col items-center bg-gradient-to-b from-green-800 to-green-950 text-white text-center px-4 overflow-hidden"
      style={{
        backgroundImage: 'url(/voding-hero-bg.png)',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transform: 'scaleX(-1)',
        minHeight: '100vh',
        height: 'calc(100vh + 300px)'
      }}
    >
      <div className="relative z-10 w-full flex flex-col items-center justify-center min-h-screen" style={{ transform: 'scaleX(-1)' }}>
        {/* Logo with ribbon */}
        <div className="relative mb-8">
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8 -rotate-6 bg-[#1FFF6B] text-black font-semibold py-2 px-6 z-10 w-[300px] text-center flex items-center justify-center text-3xl skew-x-[-20deg] border-2 border-[#FFF]">
            Sh*t Gets Built
          </div>
          <img 
            src="/voding-hero-logo.png" 
            alt="Voding Logo" 
            className="w-[210px] h-24 object-contain"
          />
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-[#2FC865] via-[#32FF78] via-[#00FF57] via-[#41FF82] to-[#40FE81] text-transparent bg-clip-text">
          {title}
        </h1>
        
        {/* Subtitle and description */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl mb-1 bg-gradient-to-r from-[#1E2929] via-[#FFFFFF] to-[#293E3F] text-transparent bg-clip-text">{subtitle}</h2>
          <p className="text-sm text-gray-300">{description}</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-[120px] relative">
          <Link 
            href={primaryButtonLink}
            className="bg-green-400 hover:bg-green-500 text-black font-medium py-2 px-6 rounded-full transition-colors"
          >
            {primaryButtonText}
          </Link>
          <Link 
            href={secondaryButtonLink}
            className="border border-green-400 hover:bg-green-800 text-white font-medium py-2 px-6 rounded-full transition-colors"
          >
            {secondaryButtonText}
          </Link>
          
          {/* Scroll indicator */}
          <div className="absolute -bottom-[200px] left-1/2 transform -translate-x-1/2">
            <p className="mb-2 text-sm text-center">Scroll</p>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex justify-center"
            >
              <ArrowDown size={24} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 