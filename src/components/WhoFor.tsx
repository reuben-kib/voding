'use client';

import Image from 'next/image';

export function WhoFor() {
  const audienceGroups = [
    {
      icon: "/founders-icon.svg",
      title: "Founders with big ideas and lean, focused teams",
      column: 1,
      row: 1,
    },
    {
      icon: "/operators-icon.svg",
      title: "Operators tired of pushing spreadsheets too far",
      column: 2,
      row: 1,
    },
    {
      icon: "/designers-icon.svg",
      title: "Designers who need devs that honor every detail",
      column: 1,
      row: 2,
    },
    {
      icon: "/agencies-icon.svg",
      title: "Agencies who want a seamless in-house dev look",
      column: 2,
      row: 2,
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-24 text-white px-4 bg-[#161D1D]">
      <div className="max-w-5xl mx-auto w-full relative z-20">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-[#2FC865] via-[#32FF78] to-[#40FE81] text-transparent bg-clip-text">
          Who We&apos;re For
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative">
          {/* Center rectangle image positioned relative to cards */}
          <div className="hidden md:flex absolute inset-0 z-0 items-center justify-center pointer-events-none">
            <Image 
              src="/rectangle.png"
              alt="Background rectangle"
              width={332}
              height={400}
              className="object-contain max-w-[332px]"
            />
          </div>
          
          {/* Glow effect positioned relative to cards */}
          <div className="hidden md:block absolute inset-0 z-0 pointer-events-none" style={{
            background: 'radial-gradient(50% 50% at 50% 50%, rgba(31, 255, 107, 0.3) 0%, rgba(31, 255, 107, 0.15) 20%, rgba(31, 255, 107, 0.07) 35%, rgba(31, 255, 107, 0.025) 50%, rgba(31, 255, 107, 0) 70%)',
          }} />
          
          {/* Connector lines */}
          <div className="hidden md:block absolute inset-0 z-0">
            {/* Horizontal connector line */}
            <div className="absolute left-1/2 top-1/2 w-12 h-[1px] bg-[#2FC865] transform -translate-x-1/2 -translate-y-1/2"></div>
            {/* Vertical connector line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] h-full bg-[#2FC865] transform -translate-x-1/2"></div>
          </div>
          
          {audienceGroups.map((group, index) => (
            <div 
              key={index}
              style={{
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                backgroundColor: 'rgba(41, 63, 63, 0.24)'
              }}
              className="relative border border-[#2FC865] rounded-lg p-10 flex flex-col items-center justify-center min-h-[180px] z-10"
            >
              <div className="flex flex-col items-center gap-6">
                <div 
                  className="relative"
                  style={{ 
                    transform: 'skew(-10deg)', 
                    boxShadow: '0 0 15px rgba(47, 200, 101, 0.5)' 
                  }}
                >
                  <div className="bg-[#1EFF6B] p-4 flex items-center justify-center">
                    <div className="w-10 h-10 relative" style={{ transform: 'skew(10deg)' }}>
                      <Image 
                        src={group.icon}
                        alt={`Icon for ${group.title}`}
                        width={40}
                        height={40}
                        className="text-black"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-center text-xl">{group.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 