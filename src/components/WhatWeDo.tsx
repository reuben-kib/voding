'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function WhatWeDo() {
  const conversationData = [
    {
      sender: 'You',
      message: "I've got an idea... but it's kinda messy. Like, duct tape and Notion boards messy."
    },
    {
      sender: 'Voding',
      message: "Say less. We've seen worse. We'll turn it into a launchable product. 💪"
    },
    {
      sender: 'You',
      message: "You guys gonna ghost me halfway through? (I've got baggage 🧳)"
    },
    {
      sender: 'Voding',
      message: "Hell no! We reply, we show up, we build, we ship. 💚"
    },
    {
      sender: 'You',
      message: "Okay, but will I actually be able to launch this? Like it's not just a pretty prototype?"
    }
  ];
  
  return (
    <section className="relative text-white bg-[#161D1D]">
      <div className="max-w-4xl mx-auto w-full px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-[#2FC865] via-[#32FF78] to-[#40FE81] text-transparent bg-clip-text">
          What We Do
        </h2>
        
        <div className="text-center mb-12">
          <p className="text-xl md:text-2xl mb-2">
            You come to <span className="text-white font-medium">us with an idea, a workflow, or something duct-</span>taped together.
          </p>
          <p className="text-xl md:text-2xl">
            We help you turn it into a usable, production-grade product—designed well, built clean, and ready to grow.
          </p>
        </div>
        
        <div className="w-full flex justify-center pb-8 relative">
          <div 
            className="absolute"
            style={{
              width: '120%',
              height: '70%',
              bottom: '-10%',
              left: '-10%',
              background: 'radial-gradient(ellipse, rgba(32, 255, 100, 0.6) 0%, rgba(32, 255, 100, 0.25) 50%, transparent 80%)',
              filter: 'blur(70px)',
              zIndex: '0'
            }}
          ></div>
          <Image 
            src="/chat.png" 
            alt="Chat conversation mockup" 
            width={482} 
            height={600} 
            className="max-w-[482px] w-full relative z-10"
            priority
          />
        </div>
      </div>
      
      <div className="w-full h-[120px] bg-[#161D1D] relative mt-[-200px] z-20" style={{ clipPath: 'polygon(0% 70%, 100% 0%, 100% 100%, 0% 100%)' }}>
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