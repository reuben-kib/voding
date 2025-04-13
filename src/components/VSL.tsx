'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface VSLProps {
  videoSrc?: string;
  posterImage?: string;
}

export function VSL({
  videoSrc = '/your-video-url.mp4',
  posterImage = '/video-poster.svg',
}: VSLProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <section className="relative flex flex-col items-center justify-center pb-20 text-white px-4">
      {/* Background with opacity and blend mode */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('/voding-vsl-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.08,
          mixBlendMode: "screen"
        }}
      />
      
      <div className="max-w-4xl mx-auto w-full relative z-20" style={{ marginTop: "-252px" }}>
        {/* Video Container with Skewed Border */}
        <div className="relative w-full aspect-video">
          {/* Green Flow Effect - positioned inside the video container */}
          <motion.div 
            className="absolute z-10 w-full h-full left-0 top-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(31,255,107,0.5) 0%, rgba(31,255,107,0.25) 40%, rgba(31,255,107,0) 70%)',
              filter: 'blur(40px)',
              transformOrigin: 'center center',
              mixBlendMode: 'screen',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Placeholder Div */}
          <div className="w-full h-full">
            <div 
              className="w-full h-full bg-[#293E3F] border-4 border-[#1FFF6B80] flex items-center justify-center relative z-20"
            >
              {!isPlaying ? (
                <div 
                  className="flex items-center justify-center cursor-pointer"
                  onClick={handlePlayClick}
                >
                  {/* Play Button */}
                  <div className="w-20 h-20 rounded-full bg-[#1FFF6B] flex items-center justify-center">
                    <div className="w-0 h-0 border-y-[10px] border-y-transparent border-l-[15px] border-l-[#1E2929] ml-1"></div>
                  </div>
                </div>
              ) : (
                <div className="text-white text-center p-4">
                  <p className="text-xl">Video Placeholder</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-xl md:text-2xl">
            We're a <span className="text-[#1FFF6B] font-semibold">small team that helps founders and startups build</span> actual software
          </p>
          <p className="text-lg md:text-xl text-gray-400">
            <span className="text-gray-400">not</span> prototypes, <span className="text-gray-400">not</span> vaporware, <span className="text-gray-400">not</span> "coming soon" landing pages.
          </p>
          <p className="text-xl md:text-2xl font-medium mt-8 mb-50">
            Real tools. Real features. Really shipped.
          </p>
        </div>
      </div>
      
      {/* Bottom diagonal section with gradient border */}
      <div className="w-full h-[120px] absolute bottom-0 left-0 right-0 bg-[#161D1D] z-10" style={{ clipPath: 'polygon(0% 70%, 100% 0%, 100% 100%, 0% 100%)' }}>
        <div 
          className="absolute top-0 left-0 right-0" 
          style={{ 
            height: '122px',
            background: 'linear-gradient(to right, #84FFA9 0%, #1DFF61 50%, #84FFA9 100%)',
            clipPath: 'polygon(0% 70%, 100% 0%, 100% 2px, 0% calc(70% + 2px))'
          }}
        ></div>
      </div>
    </section>
  );
} 