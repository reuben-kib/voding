import { HeroSection } from "@/components/HeroSection";
import { VSL } from "@/components/VSL";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhoFor } from "@/components/WhoFor";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <div className="relative z-20">
        <VSL />
        <WhatWeDo />
        <WhoFor />
      </div>
    </div>
  );
}

