import React, { useEffect, useState } from 'react';
import { MilestoneDay, TribalCouncilProps } from '../types';
import ParticleBackground from './ui/ParticleBackground';
import CampfireScene from './ui/CampfireScene';
import MantraBlock from './ui/MantraBlock';
import ReflectionVault from './ui/ReflectionVault';
import { ArrowRight } from 'lucide-react';

const TribalCouncilPage: React.FC<TribalCouncilProps> = ({ day, onReturn }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Slight delay on mount for cinematic reveal
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const getMilestoneMessage = (d: MilestoneDay) => {
    switch (d) {
      case MilestoneDay.DAY_7: return "You’ve crossed your first threshold.";
      case MilestoneDay.DAY_14: return "You’ve broken past the early resistance.";
      case MilestoneDay.DAY_21: return "You are no longer who you were.";
      case MilestoneDay.DAY_30: return "You stand as a Mind Warrior.";
      default: return "You have arrived.";
    }
  };

  return (
    <div className="min-h-screen w-full relative bg-[#001426] text-slate-200 selection:bg-amber-900 selection:text-white">
      
      {/* 0. Ambient Layers */}
      <ParticleBackground />
      
      {/* Gradient Vignette */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#001426_90%)] z-10"></div>

      {/* Main Content Scroll Container */}
      <div className={`
        relative z-20 min-h-screen flex flex-col items-center justify-start overflow-y-auto overflow-x-hidden
        transition-opacity duration-1000
        ${showContent ? 'opacity-100' : 'opacity-0'}
      `}>
        
        {/* SECTION 1: HERO VISUAL */}
        <div className="w-full max-w-5xl mx-auto pt-12 md:pt-20 pb-8 px-4">
          <CampfireScene />
        </div>

        {/* SECTION 2: THE ARRIVAL MESSAGE */}
        <div className="w-full max-w-3xl mx-auto text-center px-6 space-y-6 mt-[-40px] md:mt-[-60px] relative z-30">
          <div className="space-y-2">
            <h1 className="font-mythic text-3xl md:text-5xl lg:text-6xl text-amber-50 drop-shadow-lg tracking-wide">
              Welcome to the Tribal Council
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto rounded-full opacity-80"></div>
          </div>
          
          <div className="space-y-4 text-lg md:text-xl font-light leading-relaxed text-slate-300 max-w-2xl mx-auto">
            <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 fill-mode-backwards">
              This is where the Mind Warriors gather.
            </p>
            <p className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-backwards">
              Where stories are shared. Where resilience becomes communal.<br className="hidden md:block"/>
              Where identity meets reflection.
            </p>
            <p className="text-amber-200/80 font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-backwards">
              You are not alone in this journey.
            </p>
          </div>
        </div>

        {/* SECTION 3: MILESTONE RECOGNITION */}
        <div className="w-full py-12 md:py-16 text-center animate-in zoom-in-95 duration-1000 delay-1000 fill-mode-backwards">
          <div className="inline-block px-8 py-3 rounded-full border border-amber-500/30 bg-amber-900/10 backdrop-blur-sm">
            <span className="font-mythic text-xl md:text-2xl text-amber-400 tracking-widest uppercase glow-text">
              {getMilestoneMessage(day)}
            </span>
          </div>
        </div>

        {/* SECTION 4: THE MANTRA */}
        <div className="w-full bg-gradient-to-b from-transparent via-[#000f1d]/80 to-transparent py-10">
          <MantraBlock />
        </div>

        {/* SECTION 5: REFLECTION WINDOW */}
        <div className="w-full py-12 pb-24">
          <ReflectionVault />
        </div>

        {/* SECTION 6: RETURN BUTTON */}
        <div className="fixed bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#001426] via-[#001426] to-transparent z-50 flex justify-center backdrop-blur-[2px]">
            <button 
              onClick={onReturn}
              className="group relative px-8 py-3 overflow-hidden rounded-full bg-slate-800 text-slate-200 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 shadow-lg hover:shadow-amber-900/40"
            >
              <div className="absolute inset-0 w-0 bg-gradient-to-r from-amber-900/40 to-amber-800/40 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <div className="relative flex items-center gap-2">
                <span className="font-mythic uppercase tracking-widest text-sm md:text-base group-hover:text-amber-100">Return to your Path</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform group-hover:text-amber-100" />
              </div>
            </button>
        </div>
        
        {/* Spacer for fixed bottom bar */}
        <div className="h-24"></div>

      </div>
    </div>
  );
};

export default TribalCouncilPage;